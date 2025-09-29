// services/projects.ts

import fetchHandler from "./Handler";


export const GETExperiences = async (params = {}) => {
    return await fetchHandler({
        method: 'GET',
        endpoint: 'experiences',
        data: params
    });
};

export const createProject = async (projectData: any) => {
    return await fetchHandler({
        method: 'POST',
        endpoint: 'projects',
        data: projectData
    });
};

export const updateProject = async (id: string, projectData: any) => {
    return await fetchHandler({
        method: 'PUT',
        endpoint: `projects/${id}`,
        data: projectData
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
