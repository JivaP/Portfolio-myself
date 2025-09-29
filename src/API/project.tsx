// services/projects.ts

import fetchHandler, { fetchHandlerForm } from "./Handler";


export const getProjects = async (params = {}) => {
    return await fetchHandler({
        method: 'GET',
        endpoint: 'projects',
        data: params
    });
};

export const createProject = async (projectData: any) => {
    return await fetchHandlerForm({
        method: 'POST',
        endpoint: 'projects',
        body: projectData
    });
};

export const updateProject = async (id: string, projectData: any) => {
    return await fetchHandlerForm({
        method: 'PUT',
        endpoint: `projects/${id}`,
        body: projectData
    })
};
export const GETSingleProject = async (id: string) => {
    return await fetchHandler({
        method: 'GET',
        endpoint: `projects/${id}`,

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
