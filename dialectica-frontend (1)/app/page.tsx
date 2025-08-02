"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Video,
  Mic,
  Gavel,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Bot,
  Star,
  Quote,
  Play,
  CheckCircle,
  Globe,
  Zap,
  Heart,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FloatingElements } from "@/components/floating-elements"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function HomePage() {
  const [stats, setStats] = useState({
    users: 0,
    debates: 0,
    countries: 0,
    satisfaction: 0,
  })

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  useEffect(() => {
    if (isStatsInView) {
      const timer = setTimeout(() => {
        setStats({
          users: 50000,
          debates: 125000,
          countries: 85,
          satisfaction: 98,
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isStatsInView])

  const testimonials = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Professor, Harvard University",
      content:
        "Dialectica has revolutionized how we conduct debates in our political science courses. The AI transcription and feedback features are game-changers.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Debate Coach, Lincoln High School",
      content:
        "Our students' performance has improved dramatically since we started using Dialectica. The structured format and real-time feedback are incredible.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Corporate Trainer",
      content:
        "We use Dialectica for executive training sessions. The professional features and analytics help us track improvement in communication skills.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Real-time Debates",
      description: "Engage in structured debates with crystal-clear HD video and audio communication.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "AI Speech-to-Text",
      description: "Automatically convert spoken arguments into searchable text transcripts.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Professional Judging",
      description: "Get detailed feedback from qualified judges with customizable rubrics.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Smart Timing",
      description: "Keep debates structured with intelligent time management and notifications.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Audience Engagement",
      description: "Interactive polls, Q&A sessions, and live reactions for viewers.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Moderation",
      description: "Powerful tools to ensure civil and productive discourse.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Track improvement with detailed metrics and feedback history.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Assistant",
      description: "Get instant help and guidance from our intelligent chatbot.",
      color: "from-rose-500 to-pink-500",
    },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <CustomCursor />
        <FloatingElements />
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Trusted by 50,000+ debaters worldwide
                </motion.div>

                <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                  Where Reason{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Resonates
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your debate experience with our professional platform featuring AI-powered transcription,
                  real-time feedback, and advanced analytics. Join the future of structured discourse.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="group text-lg px-8 py-6" asChild>
                    <Link href="/signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="group text-lg px-8 py-6 bg-transparent" asChild>
                    <Link href="/features">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    14-day free trial
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 shadow-2xl">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-6 flex items-center justify-center">
                        <Play className="h-16 w-16 text-primary" />
                      </div>
                      <blockquote className="text-lg italic mb-4">
                        "The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the
                        same time and still retain the ability to function."
                      </blockquote>
                      <footer className="text-muted-foreground">— F. Scott Fitzgerald</footer>
                    </CardContent>
                  </Card>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30" ref={statsRef}>
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <StatCard
                number={stats.users.toLocaleString() + "+"}
                label="Active Users"
                icon={<Users className="h-6 w-6" />}
              />
              <StatCard
                number={stats.debates.toLocaleString() + "+"}
                label="Debates Hosted"
                icon={<MessageSquare className="h-6 w-6" />}
              />
              <StatCard number={stats.countries + "+"} label="Countries" icon={<Globe className="h-6 w-6" />} />
              <StatCard
                number={stats.satisfaction + "%"}
                label="Satisfaction Rate"
                icon={<Heart className="h-6 w-6" />}
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Powerful Features for <span className="text-primary">Every Debater</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From AI-powered transcription to professional judging tools, we've built everything you need for
                world-class debates.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    color={feature.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-muted-foreground">Get started in minutes with our intuitive platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden lg:block absolute top-16 left-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 -translate-y-1/2"></div>

              <StepCard
                number="1"
                title="Create Account"
                description="Sign up in seconds and set up your debater profile with preferences and expertise areas"
              />
              <StepCard
                number="2"
                title="Join or Create"
                description="Create a debate room or join an existing one using our smart matching system"
              />
              <StepCard
                number="3"
                title="Invite & Setup"
                description="Share room codes with participants, judges, and audience members for seamless joining"
              />
              <StepCard
                number="4"
                title="Debate & Learn"
                description="Engage in structured discourse with real-time feedback and AI-powered insights"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Loved by <span className="text-primary">Educators</span> Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                See what teachers, coaches, and students are saying about Dialectica
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Debates?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of educators, students, and professionals who are already using Dialectica to elevate
                their discourse and critical thinking skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="group text-lg px-8 py-6" asChild>
                  <Link href="/signup">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="text-sm opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <motion.div variants={itemVariants} className="text-center group cursor-pointer">
      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <motion.div
        className="text-3xl lg:text-4xl font-bold text-primary mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {number}
      </motion.div>
      <div className="text-muted-foreground group-hover:text-foreground transition-colors">{label}</div>
    </motion.div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="h-full text-center hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group overflow-hidden">
      <CardContent className="p-8 relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />
        <div
          className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div variants={itemVariants} className="text-center relative group">
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
        <div className="flex items-center">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
