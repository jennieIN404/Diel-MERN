"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap, Crown, Rocket, ArrowRight, Sparkles } from "lucide-react"
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual debaters getting started",
      icon: <Star className="h-6 w-6" />,
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Up to 5 debates per month",
        "Basic speech-to-text",
        "Standard video quality",
        "Community support",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for serious debaters and educators",
      icon: <Zap className="h-6 w-6" />,
      monthlyPrice: 19,
      yearlyPrice: 190,
      color: "from-purple-500 to-pink-500",
      features: [
        "Unlimited debates",
        "Advanced speech-to-text",
        "HD video quality",
        "Priority support",
        "Advanced analytics",
        "Custom debate formats",
        "Judge feedback system",
        "Recording & playback",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For institutions and large organizations",
      icon: <Crown className="h-6 w-6" />,
      monthlyPrice: 99,
      yearlyPrice: 990,
      color: "from-orange-500 to-red-500",
      features: [
        "Everything in Professional",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "Advanced moderation tools",
        "Bulk user management",
        "Custom branding",
        "SLA guarantee",
      ],
      popular: false,
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
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center"
              >
                <Rocket className="h-10 w-10 text-primary-foreground" />
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Choose Your <span className="text-primary">Debate Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Unlock the full potential of structured discourse with our flexible pricing plans designed for every
                level of engagement.
              </p>

              {/* Billing Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center space-x-4 mb-12"
              >
                <span className={`text-sm font-medium ${!isYearly ? "text-primary" : "text-muted-foreground"}`}>
                  Monthly
                </span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-primary" />
                <span className={`text-sm font-medium ${isYearly ? "text-primary" : "text-muted-foreground"}`}>
                  Yearly
                </span>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  Save 20%
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative"
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    >
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <Card
                    className={`h-full relative overflow-hidden backdrop-blur-sm bg-card/80 border-border/50 ${
                      plan.popular ? "ring-2 ring-primary/20 shadow-2xl" : "shadow-lg"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />

                    <CardHeader className="text-center relative z-10">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center text-white`}
                      >
                        {plan.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="text-center mb-8">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                          <span className="text-muted-foreground ml-2">/{isYearly ? "year" : "month"}</span>
                        </div>
                        {isYearly && plan.monthlyPrice > 0 && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-muted-foreground mt-2"
                          >
                            ${plan.monthlyPrice * 12} billed annually
                          </motion.p>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex }}
                            className="flex items-center text-sm"
                          >
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full group ${
                          plan.popular
                            ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href="/signup">
                          {plan.monthlyPrice === 0 ? "Get Started Free" : "Start Free Trial"}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mb-16"
            >
              <Card className="backdrop-blur-sm bg-card/80 border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Why Choose Dialectica?</CardTitle>
                  <CardDescription>Join thousands of debaters, educators, and institutions worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Zap className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                      <p className="text-muted-foreground text-sm">
                        Real-time debates with minimal latency and crystal-clear audio/video quality.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <Star className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Professional Grade</h3>
                      <p className="text-muted-foreground text-sm">
                        Advanced features for serious debaters including AI transcription and analytics.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <Crown className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Enterprise Ready</h3>
                      <p className="text-muted-foreground text-sm">
                        Scalable solutions for institutions with custom branding and integrations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="text-left backdrop-blur-sm bg-card/80 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-left backdrop-blur-sm bg-card/80 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                    <p className="text-muted-foreground text-sm">
                      All paid plans come with a 14-day free trial. No credit card required to start.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-left backdrop-blur-sm bg-card/80 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground text-sm">
                      We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-left backdrop-blur-sm bg-card/80 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you offer educational discounts?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes! We offer special pricing for educational institutions. Contact us for details.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Debating?</h2>
                  <p className="text-xl opacity-90 mb-8">
                    Join thousands of debaters worldwide and elevate your discourse today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="group" asChild>
                      <Link href="/signup">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                      asChild
                    >
                      <Link href="/contact">Contact Sales</Link>
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
