'use client'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin'
import Illustration from './notepad.svg'
import {useRef} from 'react'
import {useIsomorphicLayoutEffect} from 'usehooks-ts'

gsap.registerPlugin(DrawSVGPlugin)

// function getDistanceBetweenPoints(
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number
// ) {
//   const xDiff = x2 - x1
//   const yDiff = y2 - y1
//   return {
//     x: xDiff,
//     y: yDiff
//   }
// }

const lineStart = [
  [
    {x: -81.22601318359375, y: -153.43019104003906},
    {x: -81.22601318359375, y: -143.32716369628906},
    {x: -81.2630615234375, y: -132.34413146972656}
  ],
  [
    {x: -81.22601318359375, y: -92.81044006347656},
    {x: -81.22601318359375, y: -82.70716857910156},

    {x: -81.26300048828125, y: -71.72517395019531}
  ],
  [
    {x: -81.22601318359375, y: -32.19117736816406},
    {x: -81.22601318359375, y: -22.087966918945312},
    {x: -81.26300048828125, y: -11.105178833007812}
  ],
  [
    {x: -81.22601318359375, y: 28.428573608398438},
    {x: -81.22601318359375, y: 38.53178405761719},
    {x: -81.26300048828125, y: 49.51457214355469}
  ]
]
const lineEnd = [
  [
    {x: 54.677978515625, y: -235.1729278564453},
    {x: 54.677978515625, y: -225.0695037841797},

    {x: 1.5269775390625, y: -183.5444793701172}
  ],
  [
    {x: 54.677978515625, y: -174.55348205566406},
    {x: 26.156982421875, y: -147.5175323486328},
    {x: -31.739990234375, y: -103.83052062988281}
  ],
  [
    {x: 54.677978515625, y: -113.93391418457031},
    {x: 54.677978515625, y: -103.83052062988281},
    {x: 32.82501220703125, y: -80.66145324707031}
  ],
  [
    {x: 54.677978515625, y: -53.31452941894531},
    {x: 26.4949951171875, y: -26.600540161132812},
    {x: 2.34698486328125, y: -2.1664581298828125}
  ]
]

const checkboxDistance = [
  {x: -116.19552612304688, y: -124.369873046875},
  {x: -116.19552612304688, y: -63.84034729003906},
  {x: -116.19552612304688, y: -3.1373748779296875},
  {x: -115.67947387695312, y: 57.46412658691406}
]

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

  // const penOrigin = {
  //   x: penRect.x,
  //   y: penRect.y + penRect.height
  // }

  const tl = gsap.timeline({repeat: -1})

  rows.forEach((row, rowIdx) => {
    const checkbox = row.querySelector('.check-mark') as HTMLElement
    const lines = gsap.utils.toArray('.line-group', row) as HTMLElement[]

    lines.forEach((line, idx) => {
      // const lineRect = line.getBoundingClientRect()
      // const lineStart = getDistanceBetweenPoints(
      //   penOrigin.x,
      //   penOrigin.y,
      //   lineRect.x,
      //   lineRect.y + lineRect.height
      // )
      // const lineEnd = getDistanceBetweenPoints(
      //   penOrigin.x,
      //   penOrigin.y,
      //   lineRect.x + lineRect.width,
      //   lineRect.y
      // )

      const lineDuration = 0.6
      const rotationRepeat = 3

      tl.to([pen, penShadow], {
        x: lineStart[rowIdx][idx].x,
        y: lineStart[rowIdx][idx].y,
        duration: 0.3
      })

      tl.to([pen, penShadow], {
        x: lineEnd[rowIdx][idx].x,
        y: lineEnd[rowIdx][idx].y,
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

    // const checkboxRect = checkbox.getBoundingClientRect()

    // const checkboxDistance = getDistanceBetweenPoints(
    //   penOrigin.x,
    //   penOrigin.y,
    //   checkboxRect.x + checkboxRect.width / 2,
    //   checkboxRect.y + checkboxRect.height / 2
    // )

    tl.to([pen, penShadow], {
      x: checkboxDistance[rowIdx].x,
      y: checkboxDistance[rowIdx].y
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
