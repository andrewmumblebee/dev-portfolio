'use client'
import gsap from 'gsap'
import Illustration from './rocket.svg'
import {useRef} from 'react'
import {useIsomorphicLayoutEffect} from 'usehooks-ts'

function rocketAnimation() {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1.5
  })

  tl.addLabel('start')

  tl.set('.star', {
    opacity: 0
  })

  tl.set('.speed-line', {
    scaleY: 0
  })

  tl.fromTo(
    '.fuel',
    {
      scaleY: 0,
      transformOrigin: 'bottom center'
    },
    {
      scaleY: 1,
      duration: 2
    },
    '<'
  )

  tl.addLabel('liftOff', '+=0.3')

  tl.fromTo(
    '.platform-glow',
    {
      opacity: 0
    },
    {
      opacity: 0.25,
      ease: 'linear',
      duration: 1
    },
    'liftOff'
  )

  tl.to(
    '.exhaust',
    {
      y: 40,
      scale: 1.5,
      transformOrigin: 'center center',
      ease: 'sine.in',
      duration: 1
    },
    '<'
  )

  tl.to(
    '.rocket',
    {
      y: -100,
      ease: 'sine.inOut',
      duration: 2
    },
    '<+=0.4'
  )

  tl.addLabel('fly')

  const floatTl = gsap.timeline()

  floatTl.to('.rocket', {
    y: -90,
    yoyo: true,
    repeat: 3,
    ease: 'sine.inOut',
    duration: 1
  })

  floatTl.to(
    '.star',
    {
      keyframes: {
        y: [-70, -50],
        opacity: [0, 1, 0]
      },
      repeat: 1,
      stagger: 0.5,
      duration: 1
    },
    '<'
  )

  floatTl.to(
    '.speed-line',
    {
      keyframes: {
        y: [-70, -50],
        scaleY: [0, 1, 0],
        transformOrigin: ['top center', 'center center', 'bottom center']
      },
      stagger: 0.5,
      repeat: 1,
      duration: 1
    },
    '<'
  )

  floatTl.to(
    '.exhaust',
    {
      yoyo: true,
      repeat: 3,
      scale: 1.1,
      duration: 1,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
      y: 20
    },
    '<'
  )

  floatTl.to(
    '.fuel',
    {
      scaleY: 0.3,
      duration: 4,
      ease: 'linear'
    },
    '<'
  )

  tl.add(floatTl)

  tl.to('.fuel', {
    scaleY: 0,
    duration: 2,
    ease: 'sine.out'
  })

  tl.to(
    '.platform-glow',
    {
      opacity: 0,
      duration: 2,
      ease: 'linear'
    },
    '<'
  )

  tl.to(
    '.rocket',
    {
      y: 0,
      ease: 'sine.inOut',
      duration: 2
    },
    '<'
  )

  tl.to(
    '.exhaust',
    {
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'sine.inOut'
    },
    '<+=1'
  )

  return tl
}

export default function RocketAnimation() {
  const ref = useRef<SVGSVGElement>(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(rocketAnimation, ref)

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
