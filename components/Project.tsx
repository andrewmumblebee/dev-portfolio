'use client'
import classNames from 'classnames'
import Image, {StaticImageData} from 'next/image'
import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'

export type TProject = {
  title: string
  description: string
  technologies: string
  previewVideo?: string
  image: string | StaticImageData
  link: string
}

export default function Project({
  title,
  description,
  technologies,
  previewVideo,
  image,
  link,
  className
}: TProject & {className?: string}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})

  return (
    <article className={classNames(className, '')}>
      <div
        className="relative"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => videoRef.current?.pause()}
      >
        {isDesktop && previewVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0"
            preload="none"
            muted
            loop
          >
            <source
              src={previewVideo}
              type="video/mp4"
              className="absolute inset-0"
            />
          </video>
        )}
        <Image
          src={image}
          width={504}
          height={323}
          sizes="40vw"
          className="w-full"
          alt=""
        />
      </div>
      <h3 className="text-2xl font-display mt-4">{title}</h3>
      <p className="white mt-1 text-lg">{description}</p>
      <p className="text-grey mt-1">{technologies}</p>
      <a
        href={link}
        className="text-emerald font-display focus:text-white hover:text-white transition-colors duration-200 mt-3 inline-block"
        rel="noreferrer noopener"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => videoRef.current?.pause()}
        onFocus={() => videoRef.current?.play()}
        onBlur={() => videoRef.current?.pause()}
      >
        View site
      </a>
    </article>
  )
}
