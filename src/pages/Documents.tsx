import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Upload, FileText, Image, Table, Send, MessageSquare, Sparkles, X, File } from "lucide-react";
import { useState } from "react";

const uploadedDocs = [
  { name: "Resume_2024.pdf", type: "pdf", size: "245 KB", date: "2 hours ago" },
  { name: "System_Design_Notes.pdf", type: "pdf", size: "1.2 MB", date: "Yesterday" },
  { name: "Architecture_Diagram.png", type: "image", size: "856 KB", date: "3 days ago" },
];

const chatMessages = [
  { role: "user", content: "What are the key skills mentioned in my resume?" },
  { role: "assistant", content: "Based on your resume, the key skills highlighted are:\n\n• **Technical Skills**: React, TypeScript, Node.js, Python, AWS\n• **Soft Skills**: Leadership, Project Management, Problem Solving\n• **Domain Expertise**: Full-stack development, System Design, DevOps\n\nWould you like me to suggest improvements or identify areas to emphasize?" },
  { role: "user", content: "Can you analyze the system design diagram?" },
  { role: "assistant", content: "I've analyzed your architecture diagram. Here's what I found:\n\n**Architecture Pattern**: Microservices with API Gateway\n\n**Key Components**:\n1. Load Balancer (AWS ALB)\n2. API Gateway with rate limiting\n3. 4 microservices: Auth, Users, Orders, Notifications\n4. PostgreSQL + Redis caching layer\n\n**Suggestions for improvement**:\n• Consider adding a message queue for async processing\n• Add health check endpoints for each service" },
];

const Documents = () => {
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Document <span className="gradient-text">Analysis</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Upload PDFs, images, and documents. Our multimodal AI can analyze text, tables, charts, and images.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left sidebar - Documents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 space-y-4"
            >
              {/* Upload area */}
              <GlassCard
                hover={false}
                className={`transition-all ${isDragging ? "border-primary bg-primary/5" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="text-center py-6">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors ${
                    isDragging 
                      ? "bg-primary/20" 
                      : "bg-gradient-to-br from-primary to-secondary"
                  }`}>
                    <Upload className={`w-8 h-8 ${isDragging ? "text-primary" : "text-primary-foreground"}`} />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Upload Documents</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag & drop or click to upload
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm"
                  >
                    Browse Files
                  </motion.button>
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> PDF</span>
                    <span className="flex items-center gap-1"><Image className="w-3 h-3" /> Images</span>
                    <span className="flex items-center gap-1"><Table className="w-3 h-3" /> Excel</span>
                  </div>
                </div>
              </GlassCard>

              {/* Uploaded files */}
              <GlassCard hover={false}>
                <h3 className="font-display font-semibold mb-4">Your Documents</h3>
                <div className="space-y-2">
                  {uploadedDocs.map((doc, index) => (
                    <motion.div
                      key={doc.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        doc.type === "pdf" 
                          ? "bg-red-500/20 text-red-400" 
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {doc.type === "pdf" ? <FileText className="w-5 h-5" /> : <Image className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.size} • {doc.date}</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-all">
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>

              {/* AI Capabilities */}
              <GlassCard hover={false}>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold">AI Capabilities</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Extract text from scanned documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Analyze charts and graphs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Parse tables into structured data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Compare multiple documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Generate summaries & insights
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Right side - Chat interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <GlassCard hover={false} className="h-[calc(100vh-200px)] flex flex-col">
                {/* Chat header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">Document Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask anything about your documents</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted rounded-bl-sm"
                      }`}>
                        <p className="text-sm whitespace-pre-line">{msg.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chat input */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about your documents..."
                    className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documents;
