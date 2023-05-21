import Project from './Project'
import rocket from '@/public/rocket.png'
import notepad from '@/public/notepad.png'
import magGlass from '@/public/magnifying-glass.png'
import galaxy from '@/public/galaxy.png'
import spinner from '@/public/spinner.png'
import dots from '@/public/dots.png'
import metaballs from '@/public/metaballs.png'

const projects = [
  {
    title: 'SVG Rocket Animation',
    description:
      'A couple of looping animations i built ontop of illustrations created by a colleague.',
    technologies: 'SVG, GSAP',
    image: rocket,
    link: '/illustrations/rocket',
    linkText: 'View Animation'
  },
  {
    title: 'SVG Notepad Animation',
    technologies: 'SVG, GSAP',
    image: notepad,
    link: '/illustrations/notepad',
    linkText: 'View Animation'
  },
  {
    title: 'SVG code editor Animation',
    technologies: 'SVG, GSAP',
    image: magGlass,
    link: '/illustrations/code-editor',
    linkText: 'View Animation'
  },
  {
    title: 'SVG Magnifying Glass Animation',
    technologies: 'SVG, GSAP',
    image: magGlass,
    link: '/illustrations/magnifying-glass',
    linkText: 'View Animation'
  },
  {
    title: 'Looping dots',
    technologies: 'SVG, GSAP',
    image: dots,
    link: 'https://codepen.io/andrewmumblebee/pen/OJEGMmX/9562dbad3530ef54f516d12fbd4680d6',
    linkText: 'View on CodePen'
  },
  {
    title: 'Three.js Galaxy',
    description:
      "Built using the ThreeJS Journey course. This was a lot of fun to build, and i'm still learning how to use ThreeJS.",
    technologies: 'Three.js',
    image: galaxy,
    link: 'https://codepen.io/andrewmumblebee/pen/YzQEwVE/2f71cc20a0d11d29346029e19b7eb33d',
    linkText: 'View on CodePen'
  },
  {
    title: 'Loading Spinner',
    technologies: 'CSS',
    image: spinner,
    link: 'https://codepen.io/andrewmumblebee/pen/rNyMPGJ/641144b5d52ba6e64b6199b8bc293762',
    linkText: 'View on CodePen'
  },
  {
    title: 'CSS Metaballs',
    description:
      'A random thing i built ages ago when playing with metaballs using css filters',
    technologies: 'CSS',
    image: metaballs,
    link: 'https://codepen.io/andrewmumblebee/pen/JeBygj',
    linkText: 'View on CodePen'
  }
]

export default function FunProjects() {
  return (
    <section id="fun" className="mt-24 container">
      <div className="">
        <h2>Fun stuff</h2>
        <p className="text-xl">
          Just a sample of things i&apos;ve built for fun
        </p>
      </div>
      <div className="mt-8 flex overflow-auto scrollbar gap-x-8 snap-x snap-proximity">
        {projects.map((project, idx) => (
          <Project
            {...project}
            key={idx}
            className="flex-[0_0_80%] lg:flex-[0_0_45%] pb-8 snap-start"
          />
        ))}
      </div>
    </section>
  )
}
