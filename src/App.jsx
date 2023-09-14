import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import Main from './assets/components/Mainsection/main'
import ContactUs from './assets/components/Formulario/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App