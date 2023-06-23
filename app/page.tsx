'use client'
import Link from "next/link"

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Catch A Vibe</h1>
          <p className="py-6 text-xl">Find EDM shows near you this weekend.</p>
          <Link href="/shows"><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}
