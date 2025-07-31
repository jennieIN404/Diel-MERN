"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Video,
  Mic,
  Gavel,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Bot,
  ArrowRight,
  Calendar,
  Slack,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function FeaturesPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Platform Features</h1>
              <p className="text-xl text-muted-foreground">
                Everything you need for professional, structured debates in one powerful platform.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <LargeFeatureCard
                icon={<Video className="h-12 w-12" />}
                title="Real-time Debates"
                description="Engage in structured debates with real-time video and audio communication. Our platform provides crystal-clear video streaming with minimal latency, ensuring that the debate flows naturally."
                features={[
                  "HD video and audio quality",
                  "Low-latency streaming",
                  "Automatic bandwidth adjustment",
                  "Background noise suppression",
                ]}
              />
              <LargeFeatureCard
                icon={<Mic className="h-12 w-12" />}
                title="Speech-to-Text"
                description="Automatically convert spoken arguments into text transcripts for reference. Our advanced speech recognition technology works in real-time to provide accurate transcriptions of every debate."
                features={[
                  "Real-time transcription",
                  "Support for multiple languages",
                  "Searchable debate archives",
                  "Downloadable transcripts",
                ]}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <LargeFeatureCard
                icon={<Gavel className="h-12 w-12" />}
                title="Professional Judging"
                description="Get feedback and evaluations from qualified judges based on debate performance. Our judging system includes customizable rubrics and detailed feedback mechanisms."
                features={[
                  "Customizable scoring rubrics",
                  "Detailed feedback forms",
                  "Private judge deliberation rooms",
                  "Performance analytics",
                ]}
              />
              <LargeFeatureCard
                icon={<Clock className="h-12 w-12" />}
                title="Timed Sessions"
                description="Keep debates structured with customizable time limits and automatic notifications. Our timing system ensures fair speaking time for all participants."
                features={[
                  "Customizable time limits",
                  "Visual and audio notifications",
                  "Automatic speaker transitions",
                  "Time usage analytics",
                ]}
              />
            </div>

            {/* Additional Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Audience Participation"
                description="Engage viewers with polls, Q&A, and live reactions during debates."
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Moderation Tools"
                description="Powerful controls for moderators to ensure civil and productive discourse."
              />
              <FeatureCard
                icon={<TrendingUp className="h-8 w-8" />}
                title="Performance Analytics"
                description="Track improvement over time with detailed performance metrics and feedback history."
              />
              <FeatureCard
                icon={<Bot className="h-8 w-8" />}
                title="AI Chat Assistant"
                description="Get instant help with our AI chatbot for platform questions and debate guidance."
                action={
                  <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                    Try It Now
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        {/* Debate Formats */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Supported Debate Formats</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <FormatCard
                title="Lincoln-Douglas"
                description="One-on-one value debate with alternating constructive speeches, rebuttals, and cross-examinations."
              />
              <FormatCard
                title="Policy Debate"
                description="Team-based, research-intensive format focusing on policy proposals and their implications."
              />
              <FormatCard
                title="Parliamentary"
                description="British or World Schools format with government and opposition teams debating impromptu motions."
              />
              <FormatCard
                title="Public Forum"
                description="Accessible format designed for public audiences with shorter speeches and simplified rules."
              />
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Need a custom format? Our platform supports fully customizable debate structures.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us for Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <IntegrationCard
                  icon={
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold">
                      G
                    </div>
                  }
                  title="Google Workspace"
                  description="Single sign-on, calendar integration, and Google Drive export capabilities."
                />
                <IntegrationCard
                  icon={<Slack className="h-8 w-8 text-purple-600" />}
                  title="Slack"
                  description="Receive notifications and share debate results directly in your team channels."
                />
                <IntegrationCard
                  icon={<GraduationCap className="h-8 w-8 text-blue-600" />}
                  title="LMS Systems"
                  description="Integrate with Canvas, Blackboard, and other learning management systems."
                />
                <IntegrationCard
                  icon={<Calendar className="h-8 w-8 text-green-600" />}
                  title="Calendar Apps"
                  description="Sync debate schedules with Google Calendar, Outlook, and Apple Calendar."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Ready to elevate your debate experience?</h2>
                <p className="text-xl opacity-90">
                  Join thousands of debaters, judges, and educators using Dialectica to structure meaningful discourse
                  in a professional environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/login">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

function LargeFeatureCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <Card className="p-8">
      <CardContent className="p-0">
        <div className="w-20 h-20 mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
}) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        {action}
      </CardContent>
    </Card>
  )
}

function FormatCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

function IntegrationCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
