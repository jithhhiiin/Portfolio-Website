import React from 'react'
import './Hero.css'
import profile from "../assets/jithin.png";
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id='home' className='hero'>
      <motion.div className='hero-content'
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 1
        }}>
        <h1>
          Hi, I'm Jithin Biju A
        </h1>

        <h2>
          Fullstack Developer
        </h2>

        <p>
          I build modern web applications using django and react
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="/JITHIN_BIJU_Resume.pdf"
            download
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <div className='hero-image'>
        <img src={profile} alt="Jithin" />

      </div>
    </section>
  )
}

export default Hero