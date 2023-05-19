import Project, { TProject } from './Project'

export default function ProjectGrid({ projects }: { projects: TProject[] }) {
  return (
    <div className="flex flex-wrap gap-8 mt-8">
      {projects.map((project, idx) => (
        <Project {...project} key={idx} className="w-[48%] mt-7" />
      ))}
    </div>
  )
}
