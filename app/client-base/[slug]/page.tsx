"use client"

import { useEffect } from "react"

export default function Page({
  params: { slug },
}: {
  params: { slug: string }
}): JSX.Element {
  useEffect(() => {
    console.log("Slug", slug)
  }, [slug])

  return <h1>Client (base) - page {slug}</h1>
}
