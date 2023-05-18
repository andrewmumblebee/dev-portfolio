import Nav from '@/components/Nav'
import Header from '@/components/Header'
import { Metadata } from 'next'
import Projects from '@/components/Projects'
import FunProjects from '@/components/FunProjects'
import Contact from '@/components/Contact'
import About from '@/components/About'

export const metadata = {
  title: 'DevignatorDrew - The portfolio of Andrew Harris',
  description:
    'Andrew Harris is a Frontend Developer based in the UK who loves making fun and creative web experiences.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: [
      {
        url: 'https://devignatordrew.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevignatorDrew - The portfolio of Andrew Harris',
      },
    ],
  },
} as Metadata

export default function Home() {
  return (
    <main className="container">
      <Nav />
      <Header />
      <Projects />
      <FunProjects />
      <About />
      <Contact />
    </main>
  )
}
