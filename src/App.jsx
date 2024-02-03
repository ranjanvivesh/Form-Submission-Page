import { useState } from 'react'
import './App.css'
import Navigation from '/src/Components/Navigation/Navigation.jsx'
import ContactHeader from './Components/ConatchHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'

function App() {

  return (
    <>
    <div>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm />
      </main>
    </div>
    </>
  )
}

export default App
