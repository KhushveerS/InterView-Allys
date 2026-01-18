import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mic, Video, Upload, Play, Clock, Target, Briefcase, Code, Users, TrendingUp } from "lucide-react";

const interviewTypes = [
  {
    icon: Code,
    title: "Technical Interview",
    description: "Practice coding challenges and system design with AI feedback.",
    duration: "45 min",
    difficulty: "Advanced",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Behavioral Interview",
    description: "Master the STAR method with realistic scenario questions.",
    duration: "30 min",
    difficulty: "Intermediate",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Briefcase,
    title: "Case Study",
    description: "Solve business problems with structured frameworks.",
    duration: "60 min",
    difficulty: "Advanced",
    gradient: "from-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Product Interview",
    description: "Product sense, metrics, and roadmap discussions.",
    duration: "45 min",
    difficulty: "Intermediate",
    gradient: "from-primary via-secondary to-accent",
  },
];

const recentSessions = [
  { role: "Senior Software Engineer", company: "Tech Corp", score: 87, date: "2 hours ago" },
  { role: "Product Manager", company: "StartupXYZ", score: 92, date: "Yesterday" },
  { role: "Data Scientist", company: "DataCo", score: 78, date: "3 days ago" },
];

const Interviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              AI <span className="gradient-text">Interview</span> Practice
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Practice with realistic AI avatars that adapt to your responses. Get instant feedback and improve your interview skills.
            </p>
          </motion.div>

          {/* Upload Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <GlassCard hover={false} className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-semibold mb-2">Upload Your Resume</h2>
                  <p className="text-muted-foreground mb-4">
                    Our AI will analyze your resume to generate personalized interview questions.
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center gap-2"
                    >
                      <Upload className="w-5 h-5" />
                      Upload PDF
                    </motion.button>
                    <span className="text-sm text-muted-foreground">or drag and drop</span>
                  </div>
                </div>
                <div className="w-48 h-48 rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">PDF, DOC up to 10MB</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Interview Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-semibold mb-6">Choose Interview Type</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {interviewTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{type.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {type.duration}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {type.difficulty}
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Start Interview CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <GlassCard hover={false} gradient className="text-center py-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse-slow">
                  <Video className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Practice?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Start a live interview session with our AI avatar. Get real-time feedback and improve with every practice.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold text-lg shadow-xl hover:shadow-[0_0_40px_hsl(187_100%_50%_/_0.4)] transition-all flex items-center gap-3 mx-auto"
              >
                <Play className="w-6 h-6" />
                Start Interview
              </motion.button>
            </GlassCard>
          </motion.div>

          {/* Recent Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold mb-6">Recent Sessions</h2>
            <div className="space-y-3">
              {recentSessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <GlassCard className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{session.role}</h3>
                        <p className="text-sm text-muted-foreground">{session.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-display font-bold gradient-text">{session.score}%</div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <div className="text-sm text-muted-foreground">{session.date}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm"
                      >
                        Review
                      </motion.button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Interviews;
