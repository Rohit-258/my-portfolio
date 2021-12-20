
import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Projectlist from './components/projectlist/Projectlist'
// import Toggle from './components/toggle/Toggle'

const App = () => {
  return (
    <div>
      {/* <Toggle/> */}
      <Intro/>
      <About/>
      <Projectlist/>
      <Contact/>
    </div>
  )
}

export default App

