"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Lightbulb,
  Mail,
  Linkedin,
  Twitter,
  ArrowRight,
  Quote,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FloatingElements } from "@/components/floating-elements"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former debate champion with a PhD in Communication Studies. Passionate about democratizing access to structured discourse.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@dialectica.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack engineer with 15+ years experience building scalable platforms. Expert in real-time communication systems.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@dialectica.com",
      },
    },
    {
      name: "Dr. Amara Okafor",
      role: "Head of Education",
      bio: "Educational technology researcher focused on improving critical thinking skills through structured debate methodologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amara@dialectica.com",
      },
    },
    {
      name: "James Thompson",
      role: "Lead Designer",
      bio: "Award-winning UX designer passionate about creating intuitive interfaces that enhance human communication.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@dialectica.com",
      },
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Respectful Discourse",
      description:
        "We believe every voice deserves to be heard in a respectful, structured environment that promotes understanding over winning.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in digital communication and educational technology.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Accessibility",
      description:
        "Quality debate education and tools should be accessible to everyone, regardless of location or background.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our platform's performance to our customer support.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Idea",
      description: "Founded by debate champions who saw the need for better digital debate tools during the pandemic.",
    },
    {
      year: "2021",
      title: "First Platform",
      description: "Launched our MVP with basic video conferencing and timing features for debate tournaments.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Introduced speech-to-text and AI-powered feedback systems, revolutionizing debate analysis.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reached 50+ countries with partnerships in major educational institutions worldwide.",
    },
    {
      year: "2024",
      title: "Enterprise Launch",
      description: "Launched enterprise solutions for corporations and government institutions.",
    },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <CustomCursor />
        <FloatingElements />
        <Navigation />

        <div className="pt-24 pb-16 px-4 relative z-10">
          <div className="container mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center"
              >
                <Users className="h-12 w-12 text-primary-foreground" />
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About <span className="text-primary">Dialectica</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We're on a mission to elevate human discourse through technology, creating spaces where reason resonates
                and meaningful conversations flourish.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-12 mb-20"
            >
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To democratize access to high-quality debate education and tools, empowering individuals and
                      institutions to engage in meaningful discourse that drives positive change in our world.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where structured, respectful debate is the foundation of decision-making in education,
                      business, and governance, leading to more informed and thoughtful societies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-20"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <Quote className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    </div>
                    <div className="prose prose-lg mx-auto text-muted-foreground">
                      <p className="text-lg leading-relaxed mb-6">
                        Dialectica was born from a simple observation: the world's most important decisions are made
                        through discussion and debate, yet most people lack access to quality training and tools for
                        structured discourse.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        During the 2020 pandemic, our founders—former debate champions turned educators—watched as
                        debate tournaments moved online with clunky, inadequate tools. Students struggled with poor
                        audio quality, judges couldn't provide proper feedback, and the art of debate was losing its
                        essence.
                      </p>
                      <p className="text-lg leading-relaxed">
                        That's when we decided to build something better. Not just a video conferencing tool, but a
                        complete ecosystem for structured discourse that would preserve the integrity of debate while
                        leveraging technology to make it more accessible, engaging, and educational than ever before.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Values */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full text-center hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                <p className="text-xl text-muted-foreground">Key milestones in our mission to transform discourse</p>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>

                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index }}
                      className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-12 gap-6`}
                    >
                      <div className="flex-1">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                                {milestone.year.slice(-2)}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold">{milestone.title}</h3>
                                <p className="text-primary font-medium">{milestone.year}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline dot */}
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block"></div>

                      <div className="flex-1 hidden lg:block"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Team */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-xl text-muted-foreground">The passionate individuals behind Dialectica</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                          <p className="text-primary font-medium mb-3">{member.role}</p>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                          <div className="flex justify-center space-x-3">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={member.social.linkedin}>
                                <Linkedin className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={member.social.twitter}>
                                <Twitter className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`mailto:${member.social.email}`}>
                                <Mail className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Ready to be part of the future of discourse? Whether you're an educator, student, or professional,
                    we'd love to have you join our community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="group" asChild>
                      <Link href="/signup">
                        Get Started Today
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
