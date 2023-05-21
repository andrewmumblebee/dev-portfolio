'use client'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin'
import Illustration from './notepad.svg'
import {useRef} from 'react'
import {useIsomorphicLayoutEffect} from 'usehooks-ts'

gsap.registerPlugin(DrawSVGPlugin)

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

function animation() {
  const pen = document.querySelector('.pen') as HTMLElement
  const penShadow = document.querySelector('.pen-shadow') as HTMLElement
  const penRect = pen.getBoundingClientRect()
  const rows = gsap.utils.toArray('.row') as HTMLElement[]

  gsap.set(pen, {
    transformOrigin: 'bottom left'
  })
  gsap.set(penShadow, {
    transformOrigin: 'bottom right'
  })

  gsap.set('.checked', {
    opacity: 0
  })

  const penOrigin = {
    x: penRect.x,
    y: penRect.y + penRect.height
  }

  const tl = gsap.timeline({repeat: -1})

  rows.forEach((row) => {
    const checkbox = row.querySelector('.check-mark') as HTMLElement
    const lines = gsap.utils.toArray('.line-group', row) as HTMLElement[]

    lines.forEach((line) => {
      const lineRect = line.getBoundingClientRect()
      console.log({line, lineRect, penOrigin})
      const lineStart = getDistanceBetweenPoints(
        penOrigin.x,
        penOrigin.y,
        lineRect.x,
        lineRect.y + lineRect.height
      )
      const lineEnd = getDistanceBetweenPoints(
        penOrigin.x,
        penOrigin.y,
        lineRect.x + lineRect.width,
        lineRect.y
      )

      const lineDuration = 0.6
      const rotationRepeat = 3

      tl.to([pen, penShadow], {
        x: lineStart.x,
        y: lineStart.y,
        duration: 0.3
      })

      tl.to([pen, penShadow], {
        x: lineEnd.x,
        y: lineEnd.y,
        duration: lineDuration
      })

      tl.from(
        line.querySelector('.line-group-mask'),
        {
          drawSVG: 0,
          duration: lineDuration
        },
        '<'
      )

      tl.fromTo(
        [pen],
        {
          rotation: 0
        },
        {
          rotation: 3,
          repeat: rotationRepeat,
          ease: 'sine.inOut',
          duration: lineDuration / rotationRepeat,
          yoyo: true
        },
        '<'
      )

      tl.fromTo(
        [penShadow],
        {
          rotation: 0
        },
        {
          rotation: -3,
          ease: 'sine.inOut',
          repeat: rotationRepeat,
          duration: lineDuration / rotationRepeat,
          yoyo: true
        },
        '<'
      )
    })

    const checkboxRect = checkbox.getBoundingClientRect()

    const checkboxDistance = getDistanceBetweenPoints(
      penOrigin.x,
      penOrigin.y,
      checkboxRect.x + checkboxRect.width / 2,
      checkboxRect.y + checkboxRect.height / 2
    )

    tl.to([pen, penShadow], {
      x: checkboxDistance.x,
      y: checkboxDistance.y
    })

    tl.to(checkbox.querySelector('.checked'), {
      opacity: 1,
      duration: 0.1
    })

    tl.to(
      checkbox,
      {
        scale: 1.1,
        yoyo: true,
        repeat: 1,
        duration: 0.1,
        transformOrigin: 'center center'
      },
      '-=0.1'
    )
  })
}

export default function NotepadAnimation() {
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
