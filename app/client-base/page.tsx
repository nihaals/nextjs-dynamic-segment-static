"use client"

import { useEffect } from "react"

export default function Page(): JSX.Element {
  useEffect(() => {
    console.log("Client - base")
  }, [])

  return <h1>Client - base</h1>
}
