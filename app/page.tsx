import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Languages from '../components/Languages'
import Contact from '../components/Contact'
import BackgroundPattern from '../components/BackgroundPattern'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <BackgroundPattern className="bg-gradient-to-br from-gray-900 to-blue-900">
        <Hero />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-bl from-gray-900 to-purple-900">
        <About />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-tr from-gray-900 to-indigo-900">
        <Skills />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-tl from-gray-900 to-green-900">
        <Projects />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-br from-gray-900 to-red-900">
        <Experience />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-bl from-gray-900 to-yellow-900">
        <Languages />
      </BackgroundPattern>
      <BackgroundPattern className="bg-gradient-to-tr from-gray-900 to-pink-900">
        <Contact />
      </BackgroundPattern>
    </main>
  )
}

