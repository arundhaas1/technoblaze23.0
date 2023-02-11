import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './Contact.css'
import ContactCard from './ContactCard'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <ContactCard />
      <Footer />
    </div>
  )
}

export default Contact