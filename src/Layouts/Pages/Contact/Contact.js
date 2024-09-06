import React from 'react'
import { Header, Footer } from '../../Components'
import { ContactBody, ContactHero } from './Layout'

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactBody />
      <Footer />
    </main>
  )
}
