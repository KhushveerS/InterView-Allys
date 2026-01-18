import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Play, Volume2, Video, Mic, Brain, Target, BarChart3 } from "lucide-react";

export function InterviewPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Live AI Interviews
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Practice with{" "}
              <span className="gradient-text">Realistic</span>{" "}
              AI Avatars
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI interviewers adapt in real-time, providing a natural conversation 
              experience that mimics real interview scenarios. Get instant feedback on 
              your responses, body language hints, and areas for improvement.
            </p>

            <div className="space-y-4">
              {[
                { icon: Brain, text: "Dynamic question generation based on your resume" },
                { icon: Target, text: "Role-specific interview simulations" },
                { icon: BarChart3, text: "Detailed performance analytics" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center gap-2 shadow-lg hover:shadow-[0_0_30px_hsl(187_100%_50%_/_0.3)] transition-shadow"
            >
              <Play className="w-5 h-5" />
              Try Demo Interview
            </motion.button>
          </motion.div>

          {/* Right side - Interview preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <GlassCard hover={false} className="relative overflow-hidden aspect-video">
              {/* Avatar placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-pulse-slow" />
              </div>
              
              {/* Controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/20 border border-destructive/30">
                      <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                      <span className="text-sm text-destructive">Recording</span>
                    </div>
                    <span className="text-sm text-muted-foreground">02:34</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* AI thinking indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-xs text-muted-foreground">AI is thinking...</span>
              </div>
            </GlassCard>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl glass border border-primary/20"
            >
              <div className="text-2xl font-display font-bold gradient-text">92%</div>
              <div className="text-xs text-muted-foreground">Response Score</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 p-4 rounded-xl glass border border-secondary/20"
            >
              <div className="text-2xl font-display font-bold text-secondary">A+</div>
              <div className="text-xs text-muted-foreground">Communication</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
