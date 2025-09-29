// services/projects.ts

import fetchHandler, { fetchHandlerForm } from "./Handler";


export const getBlog_posts = async () => {
    return await fetchHandler({
        method: 'GET',
        endpoint: 'blog_posts',
        // data: params
    });
};

export const createBlog_posts = async (projectData: any) => {
    return await fetchHandlerForm({
        method: 'POST',
        endpoint: 'blog_posts',
        body: projectData
    });
};

export const updateProject = async (id: string, projectData: any) => {
    return await fetchHandlerForm({
        method: 'PUT',
        endpoint: `projects/${id}`,
        body: projectData
    });
};

// Soft delete (status = 2)
export const DeleteProject = async (id: string) => {
    return await fetchHandler({
        method: 'DELETE',
        endpoint: `projects/${id}`
    });
};

// Toggle active/inactive (status = 1 <-> 0)
export const toggleProjectStatus = async (id: string, data: any) => {
    return await fetchHandler({
        method: 'PATCH',
        endpoint: `projects/${id}/toggle`,
        data: data

    });
};
