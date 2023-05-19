import squp from '../components/squaredup.png'
import Project from './Project'

const projects = [
  {
    title: 'SVG Rocket Animation',
    description:
      'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
    technologies: 'SVG, GSAP',
    image: squp,
    link: 'https://codepen.io/andrewmumblebee/pen/abRobQx/ddbf198342c2161ebe12ae9555363b74',
  },
  {
    title: 'SVG Notepad Animation',
    description:
      'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
    technologies: 'SVG, GSAP',
    image: squp,
    link: 'https://codepen.io/andrewmumblebee/pen/NWLoQxG/f3acde6728e8ea5ae7277c6c29c95c12',
  },
  {
    title: 'SVG Magnifying Glass Animation',
    description:
      'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
    technologies: 'SVG, GSAP',
    image: squp,
    link: 'https://codepen.io/andrewmumblebee/pen/vYzPjqY/434cbc72bc7c12a9213e7accf414cb70',
  },
  {
    title: 'Looping dots',
    description:
      'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
    technologies: 'SVG, GSAP',
    image: squp,
    link: 'https://codepen.io/andrewmumblebee/pen/OJEGMmX/9562dbad3530ef54f516d12fbd4680d6',
  },
  {
    title: 'Three.js Galaxy',
    description:
      'A site i built and designed for a non-profit events company. With a custom built mix player. This was built mobile first.',
    technologies: 'Next.js, TypeScript, GSAP, TailwindCSS, Audio APIs, AWS s3',
    image: squp,
    link: 'https://nightpeloton.com',
  },
  {
    title: 'Loading Spinner',
    description: 'A looping spinner i designed.',
    technologies: 'CSS',
    image: squp,
    link: 'https://nightpeloton.com',
  },
  {
    title: 'CSS Metaballs',
    description:
      'A random thing i built ages ago when playing with metaballs using css filters',
    technologies: 'CSS',
    image: squp,
    link: 'https://nightpeloton.com',
  },
]

export default function FunProjects() {
  return (
    <section id="fun" className="mt-24">
      <div className="container">
        <h2>Fun experiments</h2>
        <p>Just a sample of things i&apos;ve built for fun</p>
      </div>
      <div className="mt-8 flex overflow-auto container scrollbar">
        {projects.map((project, idx) => (
          <Project
            {...project}
            key={idx}
            className="px-2 flex-[0_0_45%] pb-8"
          />
        ))}
      </div>
    </section>
  )
}
