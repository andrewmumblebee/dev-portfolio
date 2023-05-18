import Project from './Project'

export default function ProjectGrid({ projects }) {
  return (
    <div className="flex flex-wrap gap-3">
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  )
}
