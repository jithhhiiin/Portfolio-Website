import { useEffect, useState } from "react";
import React from "react";
import api from "../api";
import "./Skills.css";
import { motion } from "framer-motion";


function Skills() {


    const [skills, setSkills] = useState([])



    useEffect(()=>{


        api.get("skills/").then(response=>{


            setSkills(response.data)


        })


    },[])



    return (


        <section id="skills" className="skills">


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

                My Skills

            </motion.h1>



            <div className="skills-container">


                {
                    skills.map((skill,index)=>(


                        <motion.div


                            className="skill-card"


                            key={skill.id}



                            initial={{

                                opacity:0,

                                y:80

                            }}



                            whileInView={{


                                opacity:1,

                                y:0


                            }}



                            transition={{


                                duration:0.5,

                                delay:index * 0.15


                            }}


                            whileHover={{


                                scale:1.08


                            }}


                        >


                            <h3>

                                {skill.name}

                            </h3>


                            <p>

                                {skill.level}

                            </p>



                        </motion.div>


                    ))
                }


            </div>


        </section>


    )

}


export default Skills;