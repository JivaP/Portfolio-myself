// services/projects.ts

import fetchHandler from "./Handler";


export const getContact_messages = async (params = {}) => {
    return await fetchHandler({
        method: 'GET',
        endpoint: 'contact_messages',
        data: params
    });
};

export const createContact_messages = async (projectData: any) => {
    return await fetchHandler({
        method: 'POST',
        endpoint: 'contact_messages',
        data: projectData
    });
};

export const updateProject = async (id: string, projectData: any) => {
    return await fetchHandler({
        method: 'PUT',
        endpoint: `contact_messages/${id}`,
        data: projectData
    });
};

// Soft delete (status = 2)
export const Deletecontact = async (id: string) => {
    return await fetchHandler({
        method: 'DELETE',
        endpoint: `contact_messages/${id}`
    });
};

// Toggle active/inactive (status = 1 <-> 0)
export const togglecontactStatus = async (id: string, data: any) => {
    return await fetchHandler({
        method: 'PUT',
        endpoint: `contact_messages/${id}`,
        data: data

    });
};
