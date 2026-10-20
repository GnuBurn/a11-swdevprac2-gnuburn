'use client'

import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "../hooks/useWindowListener"

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true)

  useWindowListener('contextmenu', (event) => {
    event.preventDefault()
  })

  return (
    <div className="mx-auto my-12 w-[82%] max-w-6xl rounded-2xl border border-slate-300 bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="flex flex-row items-center gap-10">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
        <div className="flex flex-1 flex-col justify-center gap-5 px-2 py-4">
          <div className="text-3xl font-extrabold leading-snug text-slate-800">Book your venue today</div>
          <button
            className="self-start min-h-[52px] min-w-[130px] rounded-md bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  )
}