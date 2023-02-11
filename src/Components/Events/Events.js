import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Eventbg from './Eventbg'
import EventData from './EventData'
import './Events.css'

function Events() {
  return (
    <div className='events'>
      <Header />
      <Eventbg />
      <EventData />
      <Footer />
    </div>
  )
}

export default Events