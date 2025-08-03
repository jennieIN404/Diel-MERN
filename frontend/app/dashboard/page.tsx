"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PlusCircle,
  MessageSquare,
  Trophy,
  Clock,
  MessageCircle,
  Users,
  Calendar,
  Settings,
  TrendingUp,
  Award,
  Target,
  Zap,
  Bell,
  Search,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"

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
      duration: 0.5,
    },
  },
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [stats, setStats] = useState({
    debates: 0,
    wins: 0,
    speakingTime: 0,
    feedback: 0,
    hosted: 0,
  })

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Animate stats on mount
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStats({
          debates: 12,
          wins: 8,
          speakingTime: 145,
          feedback: 24,
          hosted: 5,
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const recentDebates = [
    {
      id: 1,
      title: "Climate Change Policy Reform",
      date: "2 hours ago",
      participants: ["Alice Johnson", "Bob Smith"],
      status: "completed",
      result: "won",
    },
    {
      id: 2,
      title: "Universal Basic Income Debate",
      date: "1 day ago",
      participants: ["Carol Davis", "David Wilson"],
      status: "completed",
      result: "lost",
    },
    {
      id: 3,
      title: "AI Ethics in Healthcare",
      date: "3 days ago",
      participants: ["Eve Brown", "Frank Miller"],
      status: "completed",
      result: "won",
    },
  ]

  const upcomingDebates = [
    {
      id: 1,
      title: "Education System Reform",
      date: "Tomorrow, 2:00 PM",
      participants: ["Grace Lee", "Henry Taylor"],
    },
    {
      id: 2,
      title: "Renewable Energy Transition",
      date: "Friday, 10:00 AM",
      participants: ["Ivy Chen", "Jack Anderson"],
    },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <CustomCursor />
        <Navigation />

        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            {/* Welcome Banner */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="mb-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground border-0 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                <CardContent className="p-8 relative z-10">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold mb-2"
                      >
                        Welcome back, Debater! 🎯
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-primary-foreground/90"
                      >
                        Ready to engage in meaningful discourse? Your debate journey continues here.
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-right"
                    >
                      <Button variant="secondary" size="lg" className="group" asChild>
                        <Link href="/debate">
                          Start New Debate
                          <Zap className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Search and Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search debates, participants, or topics..."
                  className="pl-10 bg-card/50 backdrop-blur-sm border-border/50"
                />
              </div>
              <Button variant="outline" size="icon" className="bg-card/50 backdrop-blur-sm border-border/50">
                <Bell className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 bg-card/50 backdrop-blur-sm">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="debates"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Debates
                  </TabsTrigger>
                  <TabsTrigger
                    value="analytics"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Analytics
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="overview" className="space-y-6">
                {/* Statistics */}
                <motion.div
                  ref={ref}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <StatCard
                          number={stats.debates}
                          label="Debates Participated"
                          icon={<MessageSquare className="h-5 w-5" />}
                          color="text-blue-500"
                        />
                        <StatCard
                          number={stats.wins}
                          label="Debates Won"
                          icon={<Trophy className="h-5 w-5" />}
                          color="text-yellow-500"
                        />
                        <StatCard
                          number={`${stats.speakingTime}m`}
                          label="Speaking Time"
                          icon={<Clock className="h-5 w-5" />}
                          color="text-green-500"
                        />
                        <StatCard
                          number={stats.feedback}
                          label="Feedback Received"
                          icon={<MessageCircle className="h-5 w-5" />}
                          color="text-purple-500"
                        />
                        <StatCard
                          number={stats.hosted}
                          label="Debates Hosted"
                          icon={<Users className="h-5 w-5" />}
                          color="text-red-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Recent Debates */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Recent Debates
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <AnimatePresence>
                          {recentDebates.map((debate, index) => (
                            <motion.div
                              key={debate.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                                    {debate.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mt-1">{debate.date}</p>
                                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                                    <Users className="h-3 w-3 mr-1" />
                                    {debate.participants.join(", ")}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      debate.result === "won"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                    }`}
                                  >
                                    {debate.result}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <QuickActionCard
                      icon={<PlusCircle className="h-8 w-8" />}
                      title="Start a Debate"
                      description="Create a new debate room and invite participants."
                      action={
                        <Button className="group" asChild>
                          <Link href="/debate">
                            Create Room
                            <PlusCircle className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                          </Link>
                        </Button>
                      }
                    />

                    <QuickActionCard
                      icon={<Calendar className="h-8 w-8" />}
                      title="Schedule Debate"
                      description="Plan and schedule debates for later."
                      action={
                        <Button variant="outline" className="group bg-transparent" asChild>
                          <Link href="/schedule">
                            Schedule
                            <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          </Link>
                        </Button>
                      }
                    />

                    <QuickActionCard
                      icon={<Settings className="h-8 w-8" />}
                      title="Profile Settings"
                      description="Update your profile and preferences."
                      action={
                        <Button variant="outline" className="group bg-transparent" asChild>
                          <Link href="/profile">
                            Settings
                            <Settings className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                          </Link>
                        </Button>
                      }
                    />
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="debates" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle>Upcoming Debates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingDebates.map((debate, index) => (
                        <motion.div
                          key={debate.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-semibold">{debate.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{debate.date}</p>
                          <div className="flex items-center mt-2 text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            {debate.participants.join(", ")}
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <div>
                          <h4 className="font-semibold">First Victory</h4>
                          <p className="text-sm text-muted-foreground">Won your first debate</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <Target className="h-8 w-8 text-blue-500" />
                        <div>
                          <h4 className="font-semibold">Debate Streak</h4>
                          <p className="text-sm text-muted-foreground">5 debates in a row</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Performance Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
                      <p className="text-muted-foreground mb-4">Analytics dashboard coming soon!</p>
                      <p className="text-sm text-muted-foreground">
                        Track your debate performance, improvement trends, and detailed statistics.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

function StatCard({
  number,
  label,
  icon,
  color,
}: { number: string | number; label: string; icon: React.ReactNode; color: string }) {
  return (
    <motion.div variants={itemVariants} className="text-center group cursor-pointer">
      <div className="flex items-center justify-center mb-2">
        <div className={`${color} mr-2 group-hover:scale-110 transition-transform`}>{icon}</div>
        <motion.div
          className="text-3xl font-bold text-primary"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {number}
        </motion.div>
      </div>
      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</div>
    </motion.div>
  )
}

function QuickActionCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode
  title: string
  description: string
  action: React.ReactNode
}) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          {action}
        </CardContent>
      </Card>
    </motion.div>
  )
}
