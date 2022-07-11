import { Testimonials } from "./HomePage/Testimonials/Testimonials"
import { Contact } from "./HomePage/Contact/Contact"
import { Hero } from "./HomePage/Hero"
import { Latest } from "./HomePage/Latest"
import React from "react"

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Latest latestTitle="Blog" />
      <Testimonials />
      <Latest latestTitle="Shop" />
      <Contact />
    </>
  )
}
