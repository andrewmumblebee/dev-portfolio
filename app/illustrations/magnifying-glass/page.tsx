'use client'
import gsap from 'gsap'
import Illustration from './magnifying-glass.svg'
import {useRef} from 'react'
import {useIsomorphicLayoutEffect} from 'usehooks-ts'

function animation() {
  gsap.to('.magnifying-glass', {
    y: 60,
    yoyo: true,
    duration: 3,
    repeat: -1,
    ease: 'sine.inOut'
  })

  gsap.to('.cross-hair', {
    scaleY: 0.85,
    transformOrigin: 'bottom left',
    opacity: 0,
    yoyo: true,
    duration: 3,
    repeat: -1,
    ease: 'sine.inOut'
  })

  gsap.to('.glow', {
    opacity: 0.2,
    yoyo: true,
    duration: 3,
    repeat: -1,
    ease: 'sine.inOut'
  })
}

export default function MagnifyingGlassAnimation() {
  const ref = useRef<SVGSVGElement>(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(animation, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <main>
      <Illustration ref={ref} />
    </main>
  )
}
