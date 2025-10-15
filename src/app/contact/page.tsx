import { Container } from '@/components/layout'
import { Card, CardContent } from '@/components/ui'

export const metadata = {
  title: 'Contact | Pinnacle Technologies LLC',
  description: "Get in touch with Pinnacle Technologies. Let's discuss your data platform needs.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 mt-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Let&apos;s talk about your data platform needs
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Tell us a bit about your project or challenge. Our team will respond within one
              business day to explore how we can help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent>
                <form
                  action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`}
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="you@organization.gov"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Your agency or company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Inquiry Type
                    </label>
                    <select
                      name="inquiry-type"
                      id="inquiry-type"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="new-project">New Project</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Tell us about your project or technical need..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:outline-none"
                    >
                      Send message
                    </button>
                  </div>

                  <p className="text-center text-sm text-slate-500">
                    We&apos;ll respond within one business day.
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-slate-700"
                    ></a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Team Availability</h3>
                <p className="mt-2 text-slate-700">
                  Our distributed team in Hawaii, California, and Maryland provides extended
                  coverage across U.S. time zones.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Response Time</h3>
                <p className="mt-2 text-slate-700">
                  We typically respond within one business day. For urgent matters, please indicate
                  that in your message.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
