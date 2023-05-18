import Project, { TProject } from './Project'

export default function ProjectGrid({ projects }: { projects: TProject[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {projects.map((project, idx) => (
        <Project {...project} key={idx} />
      ))}
    </div>
  )
}
