import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header' 
import Hero from '../components/Hero/Hero'
import Demos from '../components/Demos/Demos'
import Features from '../components/Features/Features'
import Highlights from '../components/Highlights/Highlights'
import ActionCall from '../components/ActionCall/ActionCall'
import Footer from '../components/Footer/Footer'



export default function Home() {
  return (
  
    <div>
      <Header/> 
      <Hero />
      <Demos />
      <Features />
      <Highlights />
      <ActionCall />
      <Footer />
    </div>

    
  )
}
