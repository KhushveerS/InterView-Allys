import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Clock, Users, Star, BookOpen, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Data Structures & Algorithms",
    category: "Computer Science",
    duration: "8 hours",
    students: "12.5K",
    rating: 4.9,
    progress: 65,
    gradient: "from-primary to-secondary",
  },
  {
    title: "System Design Fundamentals",
    category: "Software Engineering",
    duration: "6 hours",
    students: "8.2K",
    rating: 4.8,
    progress: 30,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Behavioral Interview Mastery",
    category: "Career Development",
    duration: "4 hours",
    students: "15.8K",
    rating: 4.9,
    progress: 0,
    gradient: "from-accent to-primary",
  },
];

export function CoursesPreview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(187_100%_20%_/_0.1)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2">
              AI-Generated <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Personalized learning paths created just for you
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-center gap-2 text-primary font-medium group"
          >
            View all courses
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                {/* Course image placeholder */}
                <div className={`h-40 -mx-6 -mt-6 mb-4 bg-gradient-to-br ${course.gradient} rounded-t-xl flex items-center justify-center`}>
                  <BookOpen className="w-12 h-12 text-primary-foreground/80" />
                </div>

                <div className="flex-1">
                  <div className="text-xs text-primary font-medium uppercase tracking-wide mb-2">
                    {course.category}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Progress bar */}
                  {course.progress > 0 ? (
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-primary font-medium">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${course.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                    >
                      Start Learning
                    </motion.button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
