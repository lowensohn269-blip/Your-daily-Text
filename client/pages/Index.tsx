import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cloud, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    if (email && phone && subscribe) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setPhone("");
        setSubscribe(false);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Daily Updates at Your Fingertips
                </h1>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Get real-time weather forecasts and prayer times (Zmanim) delivered directly to your phone via SMS. Stay informed, always prepared.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base border-secondary text-secondary hover:bg-secondary/5">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl">
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                      <p className="text-sm opacity-90">Today's Weather</p>
                      <p className="text-3xl font-bold mt-1">72°F</p>
                      <p className="text-sm opacity-90 mt-2">Partly Cloudy</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                      <p className="text-sm opacity-90">Zmanim</p>
                      <p className="text-sm mt-2">Sunrise: 6:23 AM</p>
                      <p className="text-sm">Sunset: 7:45 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-3xl font-bold mb-2">Start Receiving Updates</h2>
              <p className="text-foreground/70 mb-8">
                Join thousands of subscribers getting daily weather and Zmanim updates.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">Welcome!</p>
                      <p className="text-sm text-green-800">Check your phone for your first update.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(555) 000-0000"
                    required
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-border"
                    required
                  />
                  <label htmlFor="subscribe" className="text-sm text-foreground/70">
                    I consent to receive marketing and promotional SMS messages from Your Daily Text. Message and data rates may apply. Reply STOP to unsubscribe. Text HELP for assistance.{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms
                    </a>
                    {" "}•{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 mt-6"
                  disabled={!email || !phone || !subscribe}
                >
                  {submitted ? "Signing up..." : "Sign Up Now"}
                </Button>

                <p className="text-xs text-center text-foreground/60 mt-4">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  {" "}and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                  {" "}apply.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Your Daily Text?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Everything you need to stay informed, delivered right to your phone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-primary/10">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Weather</h3>
                <p className="text-foreground/70">
                  Get accurate weather forecasts updated daily, so you can plan your activities with confidence.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-secondary/10">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Prayer Times (Zmanim)</h3>
                <p className="text-foreground/70">
                  Receive accurate times for daily prayers and Jewish observance, customized to your location.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-accent/20">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy & Convenient</h3>
                <p className="text-foreground/70">
                  No app required. Get your updates via simple SMS text messages, anytime and anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-foreground/70">
                Simple, fast, and immediate access to the information you need.
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                  <p className="text-foreground/70">
                    Provide your email and phone number in just a few seconds.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2">Confirm Your Location</h3>
                  <p className="text-foreground/70">
                    Tell us where you're located so we can provide personalized updates.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2">Start Receiving Updates</h3>
                  <p className="text-foreground/70">
                    Get your first weather and Zmanim update right away, and every day thereafter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary via-pink-600 to-secondary">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Stay Informed?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community and start receiving daily weather and Zmanim updates today.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
