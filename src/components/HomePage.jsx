import { Testimonials } from "./HomePage/Testimonials/Testimonials"
import { Contact } from "./HomePage/Contact/Contact"
import { Hero } from "./HomePage/Hero"
import { LatestNews } from "./HomePage/LatestNews"
import React from "react"
import { LatestProduct } from "./HomePage/LatestProduct"

export const HomePage = ({ latestNews, latestProduct }) => {
  console.log("homePage", latestNews)
  return (
    <>
      <Hero />
      <LatestNews latestNews={latestNews} />
      <Testimonials />
      <LatestProduct latestProduct={latestProduct} />
      <Contact />
    </>
  )
}
