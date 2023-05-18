import classNames from 'classnames'
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
  className,
}: TProject & { className?: string }) {
  return (
    <article className={classNames(className, '')}>
      <Image src={image} width={400} height={150} alt="" />
      <h3 className="text-2xl font-display mt-4">{title}</h3>
      <p className="white mt-1 text-lg">{description}</p>
      <p className="text-grey mt-1">{technologies}</p>
      <a
        href={link}
        className="text-emerald font-display hover:underline mt-3 inline-block"
      >
        View site
      </a>
    </article>
  )
}
