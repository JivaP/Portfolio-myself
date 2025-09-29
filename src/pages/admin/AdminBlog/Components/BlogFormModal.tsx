// import React from "react"
// import { useForm } from "react-hook-form"
// import { Dialog, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
// import { Textarea } from "@/components/ui/textarea"
// import toast from "react-hot-toast"
// import { Button } from "@/components/ui/Button"
// import { Input } from "@/components/ui/Input"
// import { createBlog_posts } from "@/API/blogPosts"
// import { DialogContent } from "@mui/material"

// interface BlogFormModalProps {
//     onSuccess: () => void
// }

// export const BlogFormModal: React.FC<BlogFormModalProps> = ({ onSuccess }) => {
//     const [open, setOpen] = React.useState(false)
//     const { register, handleSubmit, reset } = useForm()
//     const [files, setFiles] = React.useState<File[]>([])

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setFiles(Array.from(e.target.files))
//         }
//     }

//     const onSubmit = async (data: any) => {
//         try {
//             const formData = new FormData()
//             formData.append("title", data.title)
//             formData.append("content", data.content)
//             formData.append("excerpt", data.excerpt)
//             formData.append("slug", data.slug)
//             formData.append("published", "true")

//             // tags split by comma
//             const tags = data.tags ? data.tags.split(",").map((t: string) => t.trim()) : []
//             tags.forEach((tag: string) => formData.append("tags[]", tag))

//             // multiple images
//             files.forEach((file) => formData.append("images", file))


//             const res = await createBlog_posts(formData)
//             console.log(res)
//             // if (!res.ok) throw new Error("Failed to create post")

//             toast.success("Blog post created!")
//             reset()
//             setFiles([])
//             setOpen(false)
//             onSuccess()
//         } catch (err) {
//             toast.error("Failed to create post")
//         }
//     }

//     return (
//         <Dialog open={open} onClose={() => setOpen(false)}>
//             {/* <DialogTrigger asChild> */}
//             <Button>Create Post</Button>
//             {/* </DialogTrigger> */}
//             <DialogContent className="max-w-lg">
//                 <DialogHeader>
//                     <DialogTitle>Create Blog Post</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <Input placeholder="Title" {...register("title", { required: true })} />
//                     <Textarea placeholder="Content" {...register("content", { required: true })} />
//                     <Input placeholder="Excerpt" {...register("excerpt", { required: true })} />
//                     <Input placeholder="Slug" {...register("slug", { required: true })} />
//                     <Input placeholder="Tags (comma separated)" {...register("tags")} />

//                     {/* File input */}
//                     <Input type="file" onChange={handleFileChange} />

//                     <div className="flex justify-end space-x-2">
//                         <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
//                         <Button type="submit">Save</Button>
//                     </div>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     )
// }
import React from "react"
import { useForm } from "react-hook-form"
import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { createBlog_posts } from "@/API/blogPosts"

interface BlogFormModalProps {
  onSuccess: () => void
}

export const BlogFormModal: React.FC<BlogFormModalProps> = ({ onSuccess }) => {
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, reset } = useForm()
  const [files, setFiles] = React.useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("content", data.content)
      formData.append("excerpt", data.excerpt)
      formData.append("slug", data.slug)
      formData.append("published", "true")

      // tags split by comma
      const tags = data.tags ? data.tags.split(",").map((t: string) => t.trim()) : []
      tags.forEach((tag: string) => formData.append("tags[]", tag))

      // multiple images
      files.forEach((file) => formData.append("images", file))

      const res = await createBlog_posts(formData)
      console.log(res)

      toast.success("Blog post created!")
      reset()
      setFiles([])
      setOpen(false)
      onSuccess()
    } catch (err) {
      toast.error("Failed to create post")
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Post</Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create Blog Post</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap={2}
            mt={1}
          >
            <Input placeholder="Title" {...register("title", { required: true })} />
            <Textarea placeholder="Content" {...register("content", { required: true })} />
            <Input placeholder="Excerpt" {...register("excerpt", { required: true })} />
            <Input placeholder="Slug" {...register("slug", { required: true })} />
            <Input placeholder="Tags (comma separated)" {...register("tags")} />
            <Input type="file" onChange={handleFileChange} />

            <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
