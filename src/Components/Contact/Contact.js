import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import './Contact.css'
import ContactCard from './ContactCard'

function Contact() {
  const history=useHistory();
  return (
    <div className='contact'>
      <Header />
      <ContactCard />
      <p onClick={()=>history.push("/users")}>Registered Users</p>
      <Footer />
    </div>
  )
}

export default Contact