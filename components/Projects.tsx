import ProjectGrid from './ProjectGrid'
import nightPeloton from '@/public/nightpeloton.com.png'
import swag from '@/public/swag.squaredup.com.png'
import squpCom from '@/public/squaredup.com.png'
import dsCOM from '@/public/ds.squaredup.com.png'

export default function Projects() {
  const projects = [
    {
      title: 'nightpeloton.com',
      description:
        'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
      technologies:
        'Next.js, TypeScript, GSAP, TailwindCSS, Audio APIs, AWS s3',
      image: nightPeloton,
      previewVideo: '/nightpeloton.com.mp4',
      link: 'https://nightpeloton.com'
    },
    {
      title: 'swag.squaredup.com',
      description:
        "This is one of my favourite projects i've built and designed. A lego minifigure builder with an admin UI for managing inventory for different events. Users could build their own minifigure, order it, see a build tracker, and get a dynamic sticker generated for them based on their order when they picked up their order at events our company attended. Utilising plenty of lego microanimations and Star Wars quotes for a bit of fun. Also was built optimized for mobile first, utilising loading techniques to keep it light on conference wifi & work across low spec devices.",
      technologies: 'Next.js, TypeScript, GSAP, TailwindCSS, DynamoDB',
      image: swag,
      previewVideo: '/swag.squaredup.com.mp4',
      link: 'https://swag.squaredup.com/qr/testevent'
    },
    {
      title: 'squaredup.com',
      description:
        "The main company website for SquaredUp, i've lead most of this project from Umbraco to WordPress to Headless WordPress. Most of the motion on the site was built by me, some of the scroll based animations have been removed over time. You can find a couple preserved version in the fun things section. This was built for desktop first.",
      technologies: 'Next.js, TypeScript, WordPress, GSAP, Gutenberg, SCSS',
      image: squpCom,
      previewVideo: '/squaredup.com.mp4',
      link: 'https://squaredup.com'
    },
    {
      title: 'ds.squaredup.com',
      description:
        'The secondary company website for SquaredUp. Another site with plenty of motion and microinteractions. Including a custom build pricing calculator and checkout system utilising Stripe. Along with squaredup.com i architected the project, which has grown substantially with multiple templates and hundreds of pages of content, whilst pre-building all pages and still maintaing a build time of under 5 minutes.',
      technologies:
        'Next.js, TypeScript, WordPress, GSAP, Stripe, Gutenberg, SCSS',
      image: dsCOM,
      previewVideo: '/ds.squaredup.com.mp4',
      link: 'https://ds.squaredup.com'
    }
  ]

  return (
    <section id="portfolio" className="mt-24 container">
      <h2>Portfolio</h2>
      <p className="text-xl">
        A couple of the projects i&apos;ve worked on recently. <br /> Please get
        in touch if you&apos;d like further examples or an explanation of the
        projects.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  )
}
