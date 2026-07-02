import React from 'react'
import { useState, useEffect } from 'react'
import api from '../api'
import './Project.css'
import { motion } from 'framer-motion'


function Projects() {


  const [projects, setProjects] = useState([])



  useEffect(() => {


    api.get('projects/').then(response => {

      setProjects(response.data)

    })


  }, [])



  return (


    <section id='projects' className='projects'>


      <motion.h1

        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

      >

        My Projects

      </motion.h1>




      <div className='projects-container'>


        {
          projects.map((project,index)=>(


            <motion.div


              className='project-card'


              key={project.id}



              initial={{

                opacity:0,

                y:80

              }}



              whileInView={{


                opacity:1,

                y:0


              }}



              transition={{


                duration:0.6,

                delay:index * 0.2


              }}



              whileHover={{


                scale:1.05,

                y:-10


              }}



            >



            <img
  src={`https://portfolio-backend-4kie.onrender.com${project.image}`}
  alt={project.title}
/>




              <div className='project-content'>


                <h2>

                  {project.title}

                </h2>



                <p>

                  {project.description}

                </p>




                <div className="tags">


                  <span>Django</span>

                  <span>React</span>

                  <span>REST API</span>


                </div>





                <div className='project-buttons'>


                  <a 

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                  >

                    GitHub

                  </a>



                  <a 

                  href={project.demo}

                  target="_blank"

                  rel="noreferrer"

                  >

                    Live Demo

                  </a>



                </div>



              </div>


            </motion.div>


          ))
        }


      </div>


    </section>


  )

}


export default Projects