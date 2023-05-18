import Image, { StaticImageData } from 'next/image'

export type TProject = {
  title: string
  description: string
  technologies: string
  image: string | StaticImageData
  link: string
}

export default function Project({
  title,
  description,
  technologies,
  image,
  link,
}: TProject) {
  return (
    <div className="">
      <Image src={image} width={400} height={150} alt="" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="white mt-1">{description}</p>
      <p className="text-gray-500">{technologies}</p>
      <a href={link} className="text-lime">
        View Project
      </a>
    </div>
  )
}
