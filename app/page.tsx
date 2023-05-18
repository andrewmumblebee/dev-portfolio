import ProjectGrid from '@/components/ProjectGrid'
import squp from '../components/squaredup.png'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
export default function Home() {
  const projects = [
    {
      title: 'nightpeloton.com',
      description:
        'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
      technologies:
        'Next.js, TypeScript, GSAP, TailwindCSS, Audio APIs, AWS s3',
      image: squp,
      link: 'https://nightpeloton.com',
    },
    {
      title: 'swag.squaredup.com',
      description:
        "This is one of my favourite projects i've built and designed. A lego minifigure builder with an admin UI for managing inventory for different events. Users could build their own minifigure, order it, see a build tracker, and get a dynamic sticker generated for them based on their order when they picked up their order at events our company attended. Utilising plenty of lego microanimations and Star Wars quotes for a bit of fun. Also was built optimized for mobile first, utilising loading techniques to keep it light on conference wifi & work across low spec devices.",
      technologies: 'Next.js, TypeScript, GSAP, TailwindCSS, DynamoDB',
      image: squp,
      link: 'https://swag.squaredup.com/qr/testevent',
    },
    {
      title: 'squaredup.com',
      description:
        "The main company website for SquaredUp, i've lead most of this project from Umbraco to WordPress to Headless WordPress. Most of the motion on the site was built by me, some of the scroll based animations have been removed over time. You can find a couple preserved version in the fun things section. This was built for desktop first.",
      technologies: 'Next.js, TypeScript, WordPress, GSAP, Gutenberg, SCSS',
      image: squp,
      link: 'https://squaredup.com',
    },
    {
      title: 'ds.squaredup.com',
      description:
        'The secondary company website for SquaredUp. Another site with plenty of motion and microinteractions. Including a custom build pricing calculator and checkout system utilising Stripe. Along with squaredup.com i architected the project, which has grown substantially with multiple templates and hundreds of pages of content, whilst pre-building all pages and still maintaing a build time of under 5 minutes.',
      technologies:
        'Next.js, TypeScript, WordPress, GSAP, Stripe, Gutenberg, SCSS',
      image: squp,
      link: 'https://ds.squaredup.com',
    },
  ]

  const funProjects = [
    {
      title: 'SVG Animations',
      description:
        "A collection of some SVG animation loops i've created on CodePen",
      technologies: 'GSAP, SVG',
      image: squp,
      link: 'https://www.google.com',
    },
    {
      title: 'Galaxy Generator',
      description:
        'A fun project built via the ThreeJS journey course. With the Tesla Roadster floating about in space.',
      technologies: 'ThreeJS',
      image: squp,
      link: 'https://www.google.com',
    },
  ]

  return (
    <main className="min-h-screen container">
      <Nav />
      <Header />
      <div>
        <h2 className="mt-10">Portfolio</h2>
        <h3>
          A couple of the projects i&apos;ve worked on recently. Please get in
          touch if you&apos;d like further examples or an explanation of the
          projects.
        </h3>
        <ProjectGrid projects={projects} />
        <h2 className="mt-10">Fun experiments</h2>
        <h3>Just a sample of things i've built for fun</h3>
        <ProjectGrid projects={funProjects} />

        <div>
          <h2 className="mt-10">Contact</h2>
          <p>
            If you'd like to get in touch, please email me at{' '}
            <a href="mailto:andrewceharris@gmail.com">
              andrewceharris@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
