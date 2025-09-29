// ✅ Imports
        // your old utils base url
             // new base url
import { ABI_BASE_URL } from "@/lib";
import axios from "axios";

// 🔹 Redirect helper for old fetch handlers
const handleUnauthorized = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
};

// =================================================================
// OLD FETCH HANDLERS (fetch-based, simple)
// =================================================================
const fetchHandler = async ({ method, endpoint, data }: any) => {
    const API_BASE_URLS = `${ABI_BASE_URL}/${endpoint}`;
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    const accessToken = localStorage.getItem("token");
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    const options: RequestInit = {
        method,
        headers,
        cache: "no-cache",
        credentials: "same-origin",
        ...(method !== "GET" && data ? { body: JSON.stringify(data) } : {}),
    };

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.status === 401) {
            handleUnauthorized();
            return { isError: true, data: "Unauthorized - Redirecting to login" };
        }

        if (response.ok) return await response.json();

        return { isError: true, data: await response.json() };
    } catch (error) {
        console.error("Fetch error:", error);
        return {
            isError: true,
            data: "We can't process your request at this time. Please try later.",
        };
    }
};

export default fetchHandler;

export const fetchHandler2 = async ({ method, endpoint, data }: any) => {
    const API_BASE_URLS = `${ABI_BASE_URL}/${endpoint}`;
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    const accessToken = localStorage.getItem("token");
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    const options: RequestInit = {
        method,
        headers,
        cache: "no-cache",
        credentials: "same-origin",
        ...(method !== "GET" && data ? { body: JSON.stringify(data) } : {}),
    };

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.status === 401) {
            handleUnauthorized();
            return { isError: true, data: "Unauthorized - Redirecting to login" };
        }

        if (response.ok) return await response.json();

        return { isError: true, data: await response.json() };
    } catch (error) {
        console.error("Fetch error:", error);
        return {
            isError: true,
            data: "We can't process your request at this time. Please try later.",
        };
    }
};

export const fetchHandlerForm = async ({ method, endpoint, body }: any) => {
    const API_BASE_URLS = `${ABI_BASE_URL}/${endpoint}`;
    const headers: Record<string, string> = {};
    const accessToken = localStorage.getItem("token");
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    const options: RequestInit = {
        method,
        headers,
        cache: "no-cache",
        credentials: "same-origin",
        ...(method !== "GET" && body ? { body } : {}),
    };

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.status === 401) {
            handleUnauthorized();
            return { isError: true, data: "Unauthorized - Redirecting to login" };
        }

        if (response.ok) return response; // note: don’t always parse form data
        return { isError: true, data: await response.json() };
    } catch (error) {
        console.error("Fetch error:", error);
        return {
            isError: true,
            data: "We can't process your request at this time. Please try later.",
        };
    }
};

// =================================================================
// NEW AXIOS HANDLERS (with refresh token support)
// =================================================================

// 🔹 Refresh access token with refresh token
export const refreshAccessToken = async (): Promise<string | null> => {
    try {
        const refreshToken = localStorage.getItem("token");
        if (!refreshToken) throw new Error("No refresh token available");

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
        };

        const response = await axios.post(
            `${ABI_BASE_URL}/user/refresh`,
            {},
            { headers }
        );

        const newAccessToken = response?.data?.data?.accessToken;

        if (newAccessToken && typeof newAccessToken === "string") {
            localStorage.setItem("crmaccess", newAccessToken);
            return newAccessToken;
        }

        console.error("No access token found in refresh response:", response?.data);
        return null;
    } catch (error: any) {
        if (error.response) {
            console.error("Refresh failed with response:", error.response.data);
        } else {
            console.error("Refresh failed:", error.message);
        }
        return null;
    }
};

// 🔹 Axios-based generic fetch handler
export const axiosFetchHandler = async ({
    method = "GET",
    endpoint,
    data = {},
}: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endpoint: string;
    data?: any;
}) => {
    const fullURL = `${ABI_BASE_URL}${endpoint}`;

    let accessToken = localStorage.getItem("token");

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;

    const options = {
        method,
        url: fullURL,
        headers,
        ...(method !== "GET" ? { data } : { params: data }),
    };

    try {
        const response = await axios(options);
        return response?.data;
    } catch (error: any) {
        const status = error?.response?.status;
        const backendMessage =
            error?.response?.data?.message || error?.response?.data?.error || null;

        if (status === 404) {
            setTimeout(() => (window.location.href = "/"), 60000);
            return {
                isError: true,
                data: backendMessage || "Resource not found. Redirecting soon...",
            };
        }

        if (status === 401) {
            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                headers["Authorization"] = `Bearer ${newAccessToken}`;
                options["headers"] = headers;
                try {
                    const retryResponse = await axios(options);
                    return retryResponse?.data;
                } catch (retryError: any) {
                    localStorage.removeItem("crmaccess");
                    localStorage.removeItem("crmrefresh");
                    return {
                        isError: true,
                        data:
                            retryError?.response?.data?.message ||
                            retryError?.response?.data?.error ||
                            "Retry failed after token refresh",
                    };
                }
            } else {
                localStorage.removeItem("crmaccess");
                localStorage.removeItem("crmrefresh");
                return {
                    isError: true,
                    data: backendMessage || "Unauthorized. Please log in again.",
                };
            }
        }

        if (error.response) {
            return { isError: true, data: backendMessage || error.response.data };
        } else {
            return {
                isError: true,
                data:
                    backendMessage ||
                    "We can't process your request at this time. Please try later.",
            };
        }
    }
};
