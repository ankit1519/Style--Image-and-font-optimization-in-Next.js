"use client"
import Script from "next/script"
export default function page() {
  return (
    <>
        <h1>get user location</h1>
        <Script src="/location.js"
            onLoad={()=>console.log("loaded")}
        />
    </>
  )
}