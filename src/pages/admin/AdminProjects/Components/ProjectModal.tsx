
// import { Button } from "@/components/ui/Button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Input } from "@/components/ui/Input"
// import { Project } from "@/types"
// import React, { useState } from "react"
// import { useForm } from "react-hook-form"
// import { ProjectForm } from "../AdminProjects"

// export const ProjectModal: React.FC<{
//     isOpen: boolean
//     editingProject: Project | null
//     onClose: () => void
//     onSubmit: (data: ProjectForm & { files?: File[] }) => Promise<void>
//     isSubmitting: boolean
// }> = ({ isOpen, editingProject, onClose, onSubmit, isSubmitting }) => {
//     const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ProjectForm & { files?: File[] }>()
//     const [previewImages, setPreviewImages] = useState<string[]>([])

//     // Pre-fill form when editing
//     React.useEffect(() => {
//         if (editingProject) {
//             setValue('title', editingProject.title)
//             setValue('description', editingProject.description)
//             setValue('demo_url', editingProject.demo_url || '')
//             setValue('github_url', editingProject.github_url || '')
//             setValue('technologies', Array.isArray(editingProject.technologies) ? editingProject.technologies.join(', ') : '')
//             setValue('category', editingProject.category)
//             setValue('featured', Boolean(editingProject.featured))
//             setPreviewImages(
//                 typeof editingProject.images === "string"
//                     ? [editingProject.images]
//                     : Array.isArray(editingProject.images)
//                         ? editingProject.images
//                         : []
//             )
//         } else {
//             reset()
//             setPreviewImages([])
//         }
//     }, [editingProject, reset, setValue])

//     if (!isOpen) return null

//     // Handle multiple image selection & preview
//     const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files
//         if (!files) return
//         const fileArray = Array.from(files)

//         // ✅ Save real files to RHF form
//         setValue("files", fileArray)

//         // ✅ Generate preview URLs separately
//         const previews = fileArray.map((file) => URL.createObjectURL(file))
//         setPreviewImages(previews)
//     }

//     return (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//             <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <CardHeader>
//                     <CardTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</CardTitle>
//                     <CardDescription>
//                         {editingProject ? 'Update project information' : 'Add a new project to your portfolio'}
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <form
//                         onSubmit={handleSubmit(async (data) => {
//                             const files = data.files as File[] | undefined
//                             await onSubmit({ ...data, files })
//                         })}
//                         className="space-y-4"
//                     >
//                         {/* Title & Category */}
//                         <div className="grid md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Title *</label>
//                                 <Input {...register('title', { required: 'Title is required' })} placeholder="Project title" />
//                                 {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Category *</label>
//                                 <Input {...register('category', { required: 'Category is required' })} placeholder="e.g., Web App" />
//                                 {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
//                             </div>
//                         </div>

//                         {/* Description */}
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Description *</label>
//                             <textarea
//                                 {...register('description', { required: 'Description is required' })}
//                                 rows={3}
//                                 placeholder="Brief description of the project"
//                                 className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
//                             />
//                             {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
//                         </div>

//                         {/* Multiple Images */}
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Project Images *</label>
//                             <Input type="file"   onChange={handleFilesChange} />
//                             {errors.files && <p className="text-sm text-red-500 mt-1">{errors.files.message}</p>}
//                             <div className="flex flex-wrap gap-2 mt-2">
//                                 {previewImages.map((src, idx) => (
//                                     <img key={idx} src={src} alt={`preview-${idx}`} className="w-24 h-24 object-cover rounded border" />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Demo URL & GitHub */}
//                         <div className="grid md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Demo URL</label>
//                                 <Input {...register('demo_url')} placeholder="https://demo.example.com" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">GitHub URL</label>
//                                 <Input {...register('github_url')} placeholder="https://github.com/user/repo" />
//                             </div>
//                         </div>

//                         {/* Technologies */}
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Technologies *</label>
//                             <Input {...register('technologies', { required: 'Technologies are required' })} placeholder="React, Node.js" />
//                             {errors.technologies && <p className="text-sm text-red-500 mt-1">{errors.technologies.message}</p>}
//                         </div>

//                         {/* Featured Checkbox */}
//                         <div className="flex items-center space-x-2">
//                             <input type="checkbox" id="featured" {...register('featured')} className="rounded border-input" />
//                             <label htmlFor="featured" className="text-sm font-medium">Featured project (show on homepage)</label>
//                         </div>

//                         {/* Submit & Cancel */}
//                         <div className="flex gap-3 pt-4">
//                             <Button type="submit" disabled={isSubmitting} className="flex-1">
//                                 {isSubmitting ? 'Saving...' : editingProject ? 'Update Project' : 'Create Project'}
//                             </Button>
//                             <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
//                                 Cancel
//                             </Button>
//                         </div>
//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }
"use client";
import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    Button,
    Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import type { Project } from "@/types";
import type { ProjectForm } from "../AdminProjects";

export const ProjectModal: React.FC<{
    isOpen: boolean;
    editingProject: Project | null;
    onClose: () => void;
    onSubmit: (data: ProjectForm & { files?: File[] }) => Promise<void>;
    isSubmitting: boolean;
}> = ({ isOpen, editingProject, onClose, onSubmit, isSubmitting }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<ProjectForm & { files?: File[] }>();
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    // Pre-fill form when editing
    useEffect(() => {
        if (editingProject) {
            setValue("title", editingProject.title);
            setValue("description", editingProject.description);
            setValue("demo_url", editingProject.demo_url || "");
            setValue("github_url", editingProject.github_url || "");
            setValue(
                "technologies",
                Array.isArray(editingProject.technologies)
                    ? editingProject.technologies.join(", ")
                    : ""
            );
            setValue("category", editingProject.category);
            setValue("featured", Boolean(editingProject.featured));
            setPreviewImages(
                typeof editingProject.images === "string"
                    ? [editingProject.images]
                    : Array.isArray(editingProject.images)
                        ? editingProject.images
                        : []
            );
        } else {
            reset();
            setPreviewImages([]);
        }
    }, [editingProject, reset, setValue]);

    // Handle multiple image selection & preview
    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const fileArray = Array.from(files);

        setValue("files", fileArray); // store files in form
        const previews = fileArray.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            scroll="paper"
        >
            <DialogTitle>
                {editingProject ? "Edit Project" : "Add New Project"}
            </DialogTitle>
            <DialogContent dividers>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {editingProject
                        ? "Update project information"
                        : "Add a new project to your portfolio"}
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit(async (data) => {
                        const files = data.files as File[] | undefined;
                        await onSubmit({ ...data, files });
                    })}
                    noValidate
                    sx={{ mt: 2 }}
                >
                    {/* Title & Category */}
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <TextField
                                label="Title"
                                size="small"
                                fullWidth
                                {...register("title", { required: "Title is required" })}
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Category"
                                fullWidth
                                size="small"
                                {...register("category", { required: "Category is required" })}
                                error={!!errors.category}
                                helperText={errors.category?.message}
                            />
                        </Grid>
                    </Grid>

                    {/* Description */}
                    <TextField
                        label="Description"
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                        margin="normal"
                        {...register("description", {
                            required: "Description is required",
                        })}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />

                    {/* Multiple Images */}
                    <Box mt={2}>
                        <Typography variant="body2" gutterBottom>
                            Project Images *
                        </Typography>
                        <input type="file" multiple onChange={handleFilesChange} />
                        {errors.files && (
                            <Typography variant="caption" color="error">
                                {errors.files.message}
                            </Typography>
                        )}
                        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
                            {previewImages.map((src, idx) => (
                                <Box
                                    key={idx}
                                    component="img"
                                    src={src}
                                    alt={`preview-${idx}`}
                                    sx={{
                                        width: 96,
                                        height: 96,
                                        objectFit: "cover",
                                        borderRadius: 1,
                                        border: "1px solid #ccc",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Demo URL & GitHub */}
                    <Grid container spacing={2} mt={1}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                            size="small"
                                label="Demo URL"
                                fullWidth
                                {...register("demo_url")}
                                placeholder="https://demo.example.com"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                            size="small"
                                label="GitHub URL"
                                fullWidth
                                {...register("github_url")}
                                placeholder="https://github.com/user/repo"
                            />
                        </Grid>
                    </Grid>

                    {/* Technologies */}
                    <TextField
                        label="Technologies"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register("technologies", {
                            required: "Technologies are required",
                        })}
                        error={!!errors.technologies}
                        helperText={errors.technologies?.message}
                    />

                    {/* Featured Checkbox */}
                    <FormControlLabel
                        control={<Checkbox {...register("featured")} />}
                        label="Featured project (show on homepage)"
                    />

                    {/* Submit & Cancel */}
                    <DialogActions sx={{ px: 0 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            fullWidth
                        >
                            {isSubmitting
                                ? "Saving..."
                                : editingProject
                                    ? "Update Project"
                                    : "Create Project"}
                        </Button>
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={onClose}
                            disabled={isSubmitting}
                            fullWidth
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
};
