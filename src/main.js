import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize animations
const initAnimations = () => {
  // Hero animations
  const heroTl = gsap.timeline()
  
  heroTl.from(".hero-logo", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "expo.out"
  })
  .from(".hero-title", {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  }, "-=1")
  .from(".hero-subtitle", {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.8")
  .from(".hero-ctas", {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.6")

  // Reveal animations for sections
  const reveals = gsap.utils.toArray('.reveal:not(.hero *)')
  
  reveals.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      duration: 1,
      y: 40,
      opacity: 0,
      ease: "power3.out"
    })
  })

  // Glow spot follow mouse (subtle)
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 20
    const y = (clientY / window.innerHeight - 0.5) * 20
    
    gsap.to('.glow-spot', {
      duration: 2,
      x: x,
      y: y,
      stagger: 0.1,
      ease: "power2.out"
    })
  })
}

// Cards hover effect enhancement
const initCards = () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.4,
        scale: 1.02,
        borderColor: '#00e5ff',
        ease: "power2.out"
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.4,
        scale: 1,
        borderColor: 'rgba(255, 255, 255, 0.05)',
        ease: "power2.out"
      })
    })
  })
}

// Run initialization
initAnimations()
initCards()

