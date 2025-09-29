
"use client";

import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { ContactMessage } from "@/types";
import { createContact_messages } from "@/API/Contact";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MotionBox = motion(Box);

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const messageData: Omit<ContactMessage, "id" | "createdAt" | "read"> = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await createContact_messages({
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ...messageData,
        read: false,
      });

      setIsSubmitted(true);
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Container sx={{ py: 10 }}>
      {/* Header */}
      <MotionBox
        textAlign="center"
        mb={8}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="600px" mx="auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Drop me a message and I'll get back to you as soon as possible.
        </Typography>
      </MotionBox>

      <Grid container spacing={6}>
        {/* Contact Info */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Let's Connect
            </Typography>
            <Box mt={4} display="flex" flexDirection="column" gap={4}>
              {[
                { icon: <Mail />, label: "Email", value: "jiiva4474@gmail.com", link: "mailto:jiiva4474@gmail.com" },
                { icon: <Phone />, label: "Phone", value: "+91 7339061391", link: "tel:+917339061391" },
                { icon: <MapPin />, label: "Location", value: "Chennai" },
              ].map((item, i) => (
                <Box key={i} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight="500">{item.label}</Typography>
                    {item.link ? (
                      <a href={item.link} style={{ color: "#666", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <Typography color="text.secondary">{item.value}</Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card elevation={3}>
              <CardHeader
                title="Send a Message"
                subheader="Fill out the form below and I'll get back to you soon."
              />
              <CardContent>
                {isSubmitted ? (
                  <Box textAlign="center" py={5}  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                      <Box>

                        <CheckCircle size={64} color="green" />
                      </Box>

                      <Box sx={{ textAlign: "start" }}>
                        <Typography variant="h6" mt={2}>
                          Message Sent!
                        </Typography>
                        <Typography color="text.secondary" mb={3}>
                          Thank you for reaching out. I'll get back to you within 24-48 hours.
                        </Typography>

                      </Box>
                    </Box>
                    <Button variant="outlined" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          color="info"
                          label="Name"
                          {...register("name", { required: "Name is required" })}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          color="info"
                          label="Email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          color="info"
                          fullWidth
                          label="Subject"
                          {...register("subject", { required: "Subject is required" })}
                          error={!!errors.subject}
                          helperText={errors.subject?.message}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }} >
                        <TextField
                          fullWidth
                          color="info"
                          label="Message"
                          multiline
                          rows={5}
                          {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Message must be at least 10 characters" },
                          })}
                          error={!!errors.message}
                          helperText={errors.message?.message}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth

                      variant="contained"
                      color="primary"
                      sx={{ mt: 3 }}
                      disabled={isSubmitting}
                      startIcon={!isSubmitting && <Send size={18} />}
                    >
                      {isSubmitting ? <CircularProgress size={20} color="inherit" /> : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
