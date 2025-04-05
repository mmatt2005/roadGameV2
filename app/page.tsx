"use client"
import { useEffect, useRef, useState } from "react";
import Main from "./main";

export default function Home() {
  const [loadedCanvas, setLoadedCanvas] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)


  useEffect(() => {
    if (canvasRef.current) {
      setLoadedCanvas(true)
    }
  }, [canvasRef])

  return <div className="flex">
    <canvas id="canvas" ref={canvasRef} />
    {loadedCanvas && <Main />}
  </div>
}
