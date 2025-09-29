

import React from "react";
import {
    TableContainer,
    Table as MuiTable,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Chip,
    Switch as MuiSwitch,
    IconButton,
    Box,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { Project } from "@/types";
import { ImageSlider } from "./ImageSlider";
import { DeleteIcon, EditIcon, StarIcon } from "lucide-react";

/**
 * ProjectTable (MUI + Framer Motion)
 */
export const ProjectTable: React.FC<{
    projects: Project[];
    onEdit: (project: Project) => void;
    onDelete: (id: string) => void;
    onToggleStatus: (project: Project) => void;
    onToggleFeatured: (project: Project) => void;
}> = ({ projects, onEdit, onDelete, onToggleStatus, onToggleFeatured }) => {
    return (
        <TableContainer component={Paper} elevation={1}>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Project</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Technologies</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Featured</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {projects.map((project) => {
                        // parse technologies exactly as your original logic
                        const technologies: string[] = Array.isArray(project.technologies)
                            ? project.technologies.flatMap((tech) => {
                                if (typeof tech === "string") {
                                    try {
                                        return tech.trim().startsWith("[") || tech.trim().startsWith("{")
                                            ? JSON.parse(tech)
                                            : [tech];
                                    } catch {
                                        return [tech];
                                    }
                                }
                                return [];
                            })
                            : typeof project.technologies === "string"
                                ? (() => {
                                    try {
                                        const techStr = project.technologies as string;
                                        return techStr.trim().startsWith("[") || techStr.trim().startsWith("{")
                                            ? JSON.parse(techStr)
                                            : [techStr];
                                    } catch {
                                        return [project.technologies as string];
                                    }
                                })()
                                : [];

                        const isActive = project.status === 1;
                        const isFeatured = Number(project.featured) > 0;

                        return (
                            // use framer-motion on the underlying tr element via component prop
                            <TableRow
                                key={project._id}
                                component={motion.tr}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                style={{ transformOrigin: "0 0" }}
                            >
                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Box width={64} height={48} flexShrink={0}>
                                            <ImageSlider
                                                images={Array.isArray(project.images) ? project.images : [project.images]}
                                                alt={project.title}
                                            />
                                        </Box>

                                        <Box>
                                            <Typography variant="subtitle2">{project.title}</Typography>
                                            <Typography variant="caption" color="text.secondary" noWrap>
                                                {project.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Chip label={project.category ?? "—"} variant="outlined" size="small" />
                                </TableCell>

                                <TableCell>
                                    <Box display="flex" flexWrap="wrap" gap={0.5} maxWidth={240}>
                                        {technologies.slice(0, 3).map((tech, idx) => (
                                            <Chip key={idx} label={tech} size="small" variant="outlined" />
                                        ))}
                                        {technologies.length > 3 && (
                                            <Chip label={`+${technologies.length - 3}`} size="small" variant="outlined" />
                                        )}
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <MuiSwitch
                                            checked={isActive}
                                            onChange={() => onToggleStatus(project)}
                                            inputProps={{ "aria-label": `toggle-status-${project._id}` }}
                                            size="small"
                                        />
                                        <Chip
                                            label={isActive ? "Active" : "Inactive"}
                                            size="small"
                                            color={isActive ? "primary" : "default"}
                                        />
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <MuiSwitch
                                            checked={isFeatured}
                                            onChange={() => onToggleFeatured(project)}
                                            inputProps={{ "aria-label": `toggle-featured-${project._id}` }}
                                            size="small"
                                        />
                                        {isFeatured ? (
                                            <Chip
                                                icon={<StarIcon fontSize="small" />}
                                                label="Featured"
                                                size="small"
                                                variant="outlined"
                                            />
                                        ) : (
                                            <Typography variant="body2" color="text.secondary">
                                                No
                                            </Typography>
                                        )}
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box>
                                        <Typography variant="body2">{formatDate(project.created_at)}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Updated {formatDate(project.updatedAt)}
                                        </Typography>
                                    </Box>
                                </TableCell>

                                <TableCell align="right">
                                    <IconButton
                                        size="small"
                                        aria-label="edit"
                                        onClick={() => onEdit(project)}
                                        title="Edit"
                                    >
                                        <EditIcon fontSize="small" />
                                    </IconButton>

                                    <IconButton
                                        size="small"
                                        aria-label="delete"
                                        onClick={() => onDelete(project._id)}
                                        title="Delete"
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};
