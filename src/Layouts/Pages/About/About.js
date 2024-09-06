import React from 'react'
import { Footer, Header } from '../../Components'
import { AboutBody, AboutHero } from '../About/Layout'

export default function About() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutBody />
      <Footer />
    </main>
  )
}
