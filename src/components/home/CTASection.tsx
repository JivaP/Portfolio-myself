import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-12 text-center text-primary-foreground"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life.
            Let's discuss your next digital venture.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
