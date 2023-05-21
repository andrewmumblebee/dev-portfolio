'use client'
import gsap from 'gsap'
import Illustration from './code-editor.svg'
import {useRef} from 'react'
import {useIsomorphicLayoutEffect} from 'usehooks-ts'

function getDistanceBetweenPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const xDiff = x2 - x1
  const yDiff = y2 - y1
  return {
    x: xDiff,
    y: yDiff
  }
}

function codeEditorAnimation() {
  const tl = gsap.timeline({
    repeat: -1
  })
  const cursor = document.querySelector('.cursor') as SVGElement
  const cursorBBC = cursor.getBoundingClientRect()
  const cursorOrigin = {
    x: cursorBBC.x,
    y: cursorBBC.y,
    height: cursorBBC.height,
    width: cursorBBC.width
  }

  gsap.set(cursor, {
    transformOrigin: 'center center'
  })

  const highlightLines = gsap.utils.toArray('.highlight-line') as SVGElement[]

  highlightLines.forEach((line) => {
    const boundingRect = line.getBoundingClientRect()
    const distance = getDistanceBetweenPoints(
      cursorOrigin.x,
      cursorOrigin.y,
      boundingRect.x + boundingRect.width / 2,
      boundingRect.y + boundingRect.height / 2
    )

    tl.to(cursor, {
      duration: 1,
      ease: 'sine.inOut',
      x: distance.x,
      y: distance.y
    })

    tl.to(
      line.querySelector('.line'),
      {
        opacity: 0,
        duration: 0.2
      },
      '-=0.1'
    )

    tl.to(
      line.querySelector('.highlight'),
      {
        opacity: 1,
        duration: 0.2
      },
      '<'
    )

    tl.to(
      cursor,
      {
        scale: 0.9,
        repeat: 1,
        yoyo: true,
        duration: 0.2
      },
      '<'
    )
  })

  tl.to(cursor, {
    duration: 1,
    y: 0,
    x: 0
  })

  tl.to(cursor, {
    duration: 0.2,
    scale: 1.1,
    repeat: 1,
    transformOrigin: 'center center',
    yoyo: true
  })

  highlightLines.forEach((line) => {
    tl.to(
      line.querySelector('.line'),
      {
        opacity: 1,
        duration: 0.2
      },
      '<'
    )

    tl.to(
      line.querySelector('.highlight'),
      {
        opacity: 0,
        duration: 0.2
      },
      '<'
    )
  })

  gsap.to('.brackets', {
    duration: 1.5,
    ease: 'sine.inOut',
    y: 10,
    yoyo: true,
    repeat: -1
  })

  return tl
}

export default function CodeEditorAnimation() {
  const ref = useRef<SVGSVGElement>(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(codeEditorAnimation, ref)

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
