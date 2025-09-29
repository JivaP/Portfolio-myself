"use client";

import { useState } from "react";
import {
    Container,
    TextField,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
    CircularProgress,
    IconButton,
    Paper,
    Button,
} from "@mui/material";
import { Eye, EyeOff, Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { login, loading } = useAuth();

    const handleLogin = async () => {
        await login(email, password);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            background:
                                "linear-gradient(135deg, #000000, #9809f7, #d500f9, #9809f7, #000000)",
                            backgroundSize: "400% 400%",
                            animation: "glitter 6s ease infinite",
                            p: 3,
                            textAlign: "center",
                            color: "white",
                            "@keyframes glitter": {
                                "0%": { backgroundPosition: "0% 50%" },
                                "50%": { backgroundPosition: "100% 50%" },
                                "100%": { backgroundPosition: "0% 50%" },
                            },
                        }}
                    >
                        <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
                            <Shield size={32} style={{ marginRight: 8 }} />
                            <Typography variant="h5" fontWeight="bold">
                                Super Admin Access
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                            Restricted access to authorized personnel only
                        </Typography>
                    </Box>

                    {/* Form */}
                    <Box sx={{ p: 4 }}>
                        <TextField
                            fullWidth
                            label="Admin Email"
                            type="email"
                            placeholder="admin@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                        />

                        <Box mt={2}>
                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                Password
                            </Typography>
                            <Box position="relative">
                                <TextField
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                edge="end"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </IconButton>
                                        ),
                                    }}
                                />
                            </Box>
                        </Box>

                        <FormControlLabel
                            control={<Checkbox sx={{ color: "white" }} />}
                            label="Remember this device"
                            sx={{ mt: 2, color: "white" }}
                        />

                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            //   color="primary"
                            fullWidth
                            disabled={loading}
                            sx={{ mt: 3, py: 1.5 }}
                        >
                            {loading ? (
                                <>
                                    <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                                    Verifying credentials...
                                </>
                            ) : (
                                "Access Admin Panel"
                            )}
                        </Button>

                        <Box textAlign="center" mt={2}>
                            <Typography
                                variant="body2"
                                sx={{ cursor: "pointer", }}
                            >
                                Forgot admin password?
                            </Typography>
                        </Box>
                    </Box>

                    {/* Footer */}
                    <Box
                        sx={{
                            py: 2,
                            px: 2,
                            textAlign: "center",
                            bgcolor: "grey.100",
                        }}
                    >
                        <Typography variant="caption" color="text.secondary" align="center">
                            © {new Date().getFullYear()} Company Name. Super admin access is
                            monitored and logged.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
