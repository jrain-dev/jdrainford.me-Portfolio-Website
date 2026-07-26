// components/DecodeText.tsx
'use client'

import { useEffect, useState } from 'react'

const CHARS = '01!@#$%&*<>[]{}'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

export default function DecodeText({
  text,
  duration = 1200,      // total time (ms) for the whole reveal
  scrambleSpeed = 40,    // how often (ms) unresolved characters re-randomize
  className = '',
}: {
  text: string
  duration?: number
  scrambleSpeed?: number
  className?: string
}) {
  const [displayed, setDisplayed] = useState(() =>
    text.split('').map(() => randomChar())
  )

  useEffect(() => {
    let cancelled = false
    const chars = text.split('')
    const revealedUntil = new Array(chars.length).fill(false)

    const startTime = Date.now()
    const revealInterval = duration / chars.length

    // progressively lock in characters left to right
    const revealTimer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const shouldBeRevealed = Math.floor(elapsed / revealInterval)

      for (let i = 0; i < shouldBeRevealed && i < chars.length; i++) {
        revealedUntil[i] = true
      }

      if (shouldBeRevealed >= chars.length) {
        clearInterval(revealTimer)
      }
    }, revealInterval)

    // continuously scramble unrevealed characters
    const scrambleTimer = setInterval(() => {
      if (cancelled) return

      setDisplayed(
        chars.map((char, i) => {
          if (revealedUntil[i]) return char
          if (char === ' ') return ' '
          return randomChar()
        })
      )

      if (revealedUntil.every(Boolean)) {
        clearInterval(scrambleTimer)
      }
    }, scrambleSpeed)

    return () => {
      cancelled = true
      clearInterval(revealTimer)
      clearInterval(scrambleTimer)
    }
  }, [text, duration, scrambleSpeed])

  return <span className={className}>{displayed.join('')}</span>
}