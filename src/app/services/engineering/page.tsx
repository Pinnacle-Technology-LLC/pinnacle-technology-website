import Link from 'next/link'
import { Container } from '@/components/layout'
import { Badge } from '@/components/ui'

export const metadata = {
  title: 'Front-end & Back-end Engineering | Services | Pinnacle Technologies',
}

export default function EngineeringPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Service
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Front-end & Back-end Engineering
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Modern, accessible interfaces with robust APIs and services.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/contact"
              className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
