import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mic, BookOpen, FileSearch, Pencil, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Avatar Interviews",
    description: "Practice with realistic 3D AI interviewers that adapt to your responses in real-time.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: BookOpen,
    title: "Generative Courses",
    description: "AI-created courses tailored to your learning goals with interactive quizzes.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: FileSearch,
    title: "Document Analysis",
    description: "Upload PDFs and images for intelligent multimodal analysis and insights.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Pencil,
    title: "Voice Whiteboard",
    description: "Create diagrams and flowcharts using natural voice commands.",
    gradient: "from-primary via-secondary to-accent",
  },
  {
    icon: Sparkles,
    title: "Smart Feedback",
    description: "Get detailed performance analysis and personalized improvement suggestions.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Shield,
    title: "Verified Certificates",
    description: "Earn blockchain-verified certificates upon completing courses.",
    gradient: "from-accent to-secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(250_60%_15%_/_0.2)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools powered by cutting-edge AI to transform your learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
