'use client'

import { useEffect, useRef } from 'react'

export default function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc: string, isPlaying: boolean
}) {
  const vdoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play()
    } else {
      vdoRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <video
      className="w-[45%] min-w-[260px] max-w-[420px] flex-shrink-0 rounded-xl object-cover shadow-md"
      src={vdoSrc}
      ref={vdoRef}
      controls
      loop
      muted
    />
  )
}