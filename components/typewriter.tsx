'use client'

import { useEffect, useState } from 'react'

const NEARBY_KEYS: Record<string, string> = {
  a: 's', b: 'v', c: 'x', d: 'f', e: 'w', f: 'g', g: 'h', h: 'j',
  i: 'o', j: 'k', k: 'l', l: 'k', m: 'n', n: 'm', o: 'p', p: 'o',
  q: 'w', r: 't', s: 'a', t: 'r', u: 'y', v: 'b', w: 'e', x: 'c',
  y: 'u', z: 'x',
}

function getTypo(char: string): string {
  const lower = char.toLowerCase()
  return NEARBY_KEYS[lower] ?? char
}

export default function Typewriter({
  text,
  maxSpeed = 30,     // fastest delay (ms) once "warmed up"
  minSpeed = 100,     // slowest delay (ms) at the very start / right after a mistake
  rampLength = 12,    // how many characters it takes to reach full speed
  mistakeChance = 0.08,
  className = '',
}: {
  text: string
  maxSpeed?: number
  minSpeed?: number
  rampLength?: number
  mistakeChance?: number
  className?: string
}) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let cancelled = false
    setDisplayedText('')

    function wait(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    // velocity ramps from minSpeed down to maxSpeed over `rampLength` characters
    function speedForStreak(streak: number) {
      const progress = Math.min(streak / rampLength, 1)
      return minSpeed - (minSpeed - maxSpeed) * progress
    }

    async function type() {
      let current = ''
      let streak = 0 // chars typed since last mistake (drives velocity)

      for (let i = 0; i < text.length; i++) {
        if (cancelled) return
        const char = text[i]
        const delay = speedForStreak(streak)

        if (Math.random() < mistakeChance && char.trim() !== '') {
          const wrongChar = getTypo(char)
          current += wrongChar
          setDisplayedText(current)
          await wait(delay * 3)

          current = current.slice(0, -1)
          setDisplayedText(current)
          await wait(delay * 2)

          streak = 0 // velocity resets — back to slow/deliberate typing
        }

        current += char
        setDisplayedText(current)
        streak++
        await wait(speedForStreak(streak))
      }
    }

    type()

    return () => {
      cancelled = true
    }
  }, [text, maxSpeed, minSpeed, rampLength, mistakeChance])

  return (
    <span className={className}>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  )
}