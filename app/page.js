"use client"
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030607] ">
    <Navbar />
    <div className='container mt-24 mx-auto px-12 py-4'>
    <HeroSection />
    <AboutSection />
    <Skills/>
    <ProjectsSection/>
    <EmailSection/>
    </div>
    <Footer/>
    </main>
  )
}
