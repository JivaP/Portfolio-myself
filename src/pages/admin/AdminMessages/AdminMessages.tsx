
import React from "react"
import toast from "react-hot-toast"
import type { ContactMessage } from "@/types"
import {
  Deletecontact,
  getContact_messages,
  togglecontactStatus,
} from "@/API/Contact"

import { Trash2, CheckCircle, XCircle } from "lucide-react"
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
  // Stack,/
  Chip,
  // Button,
} from "@mui/material"

const AdminMessages: React.FC = () => {
  const [messages, setMessages] = React.useState<ContactMessage[]>([])
  const [loading, setLoading] = React.useState(true)

  // 📌 Load messages
  const loadMessages = async () => {
    try {
      const res = await getContact_messages()
      setMessages(res.data) // because backend returns { success, data }
    } catch (error) {
      console.error("Error loading messages:", error)
      toast.error("Failed to load messages")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadMessages()
  }, [])

  // 📌 Toggle read/unread
  const toggleRead = async (id: string, current: boolean) => {
    try {
      await togglecontactStatus(id, { read: !current })
      toast.success(`Marked as ${current ? "unread" : "read"}`)
      loadMessages()
    } catch (err) {
      toast.error("Failed to update message")
    }
  }

  // 📌 Delete message
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return
    try {
      await Deletecontact(id)
      toast.success("Message deleted")
      loadMessages()
    } catch (err) {
      toast.error("Failed to delete message")
    }
  }

  return (
    <Box>
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Messages
        </Typography>
        <Typography variant="body2" color="text.secondary">
          View and manage contact form submissions
        </Typography>
      </Box>

      {/* Content */}
      {loading ? (
        <Box display="flex" justifyContent="center" p={6}>
          <CircularProgress />
        </Box>
      ) : (
        <Card>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 950 }} size="small" aria-label="a dense table" >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages?.map((msg) => (
                    <TableRow key={msg._id} hover>
                      <TableCell>
                        <Typography fontWeight="medium">{msg.name}</Typography>
                      </TableCell>
                      <TableCell color="text.secondary" sx={{ maxWidth: 100, width: "100%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{msg.email}</TableCell>
                      <TableCell>{msg.subject}</TableCell>
                      <TableCell sx={{ maxWidth: 100, width: "100%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} >
                        {msg.message}
                      </TableCell>
                      <TableCell color="text.secondary">
                        {new Date(msg?.created_at ?? "").toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {msg.read ? (
                          <Chip
                            label="Read"
                            color="success"
                            size="small"
                            variant="outlined"
                            icon={<CheckCircle size={16} />}
                          />
                        ) : (
                          <Chip
                            label="Unread"
                            color="error"
                            size="small"
                            variant="outlined"
                            icon={<XCircle size={16} />}
                          />
                        )}
                      </TableCell>
                      <TableCell >

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                          <Box>

                            <Chip
                              size="small"
                              // variant="contained"
                              
                              label={msg.read ? "Mark Unread" : "Mark Read"}
                              color={msg.read ? "error" : "warning"}
                              icon={msg.read ? <XCircle size={16} /> : <CheckCircle size={16} />}
                              sx={{ fontSize: "0.75rem" }}
                              onClick={() =>
                                msg._id && toggleRead(msg._id, msg.read)
                              }
                            >

                            </Chip>
                          </Box>
                          <Box>

                            <IconButton
                              color="error"
                              onClick={() => msg._id && handleDelete(msg._id)}
                            >
                              <Trash2 size={18} />
                            </IconButton>
                          </Box>
                        </Box>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )
      }
    </Box >
  )
}

export default AdminMessages
