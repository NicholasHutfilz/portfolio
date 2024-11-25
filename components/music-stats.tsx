/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/4Gux5QklpLo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useEffect } from "react"

export function MusicStats() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    const maxCount1 = 150519;
    const maxCount2 = 643;
    const totalDuration = 5000; // Total time in milliseconds
    const intervalTime = 25; // Interval time in milliseconds
    const steps = totalDuration / intervalTime;

    const increment1 = maxCount1 / steps; // Increment for count1
    const increment2 = maxCount2 / steps; // Increment for count2

    const interval = setInterval(() => {
      setCount1(prev => Math.min(Math.round(prev + increment1), maxCount1));
      setCount2(prev => Math.min(Math.round(prev + increment2), maxCount2));
      if (count1 >= maxCount1 && count2 >= maxCount2) {
        clearInterval(interval);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [count1, count2])
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="flex items-end gap-8 w-full">
        <div className="flex flex-col items-center w-1/2">
          <div className="text-4xl font-bold text-primary">{ Math.round(count1) }</div>
          <div>Streams Across All Platforms</div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div className="text-4xl font-bold text-primary">{ Math.round(count2) }</div>
          <div>Unique US Radio Stations</div>
        </div>
      </div>
    </div>
  )
}