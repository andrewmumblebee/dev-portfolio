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
      <Image
        src={image}
        width={504}
        height={323}
        sizes="40vw"
        className="rounded"
        alt=""
      />
      <h3 className="text-2xl font-display mt-4">{title}</h3>
      <p className="white mt-1 text-lg">{description}</p>
      <p className="text-grey mt-1">{technologies}</p>
      <a
        href={link}
        className="text-emerald font-display focus:text-white hover:text-white transition-colors duration-200 mt-3 inline-block"
        rel="noreferrer noopener"
      >
        View site
      </a>
    </article>
  )
}
