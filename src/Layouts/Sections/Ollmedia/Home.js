import React from 'react'
import { Footer, Header } from '../../Components'
import { OHero, OBody } from './Layout'

export default function Home() {
  return (
    <main>
        <Header />
        <OHero />
        <OBody />
        <Footer />
    </main>
  )
}
