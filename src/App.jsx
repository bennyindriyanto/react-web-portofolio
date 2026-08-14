import { Suspense, lazy } from 'react'
import { useTheme } from './hooks/useTheme'

const Navbar = lazy(() => import('./components/Navbar').then(m => ({ default: m.default })))
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.default })))
const About = lazy(() => import('./components/About').then(m => ({ default: m.default })))
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.default })))
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.default })))
const Expertise = lazy(() => import('./components/Expertise').then(m => ({ default: m.default })))
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.default })))
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.default })))
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.default })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.default })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.default })))

function SectionLoader() {
  return <div className="section-loader"><div className="loader-spinner" /></div>
}

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app">
      <Suspense fallback={<SectionLoader />}>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Expertise />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
