import React from "react";
import "./About.css";
import { motion } from "framer-motion";


function About() {

    return (

        <section id="about" className="about">


            <motion.div className="about-content"

                initial={{
                    opacity:0,
                    x:-50
                }}

                whileInView={{
                    opacity:1,
                    x:0
                }}

                transition={{
                    duration:0.6
                }}

            >

                <h1>
                    About Me
                </h1>


                <p>
                    I am a Full Stack Developer passionate about
                    building modern web applications using Django
                    and React. I enjoy creating clean,
                    responsive and user-friendly applications.
                </p>


            </motion.div>



            <div className="about-cards">


                {
                    ["Backend","Frontend","Goal"].map((item,index)=>(


                        <motion.div

                        className="about-card"

                        key={item}


                        initial={{
                            opacity:0,
                            y:50
                        }}


                        whileInView={{
                            opacity:1,
                            y:0
                        }}


                        transition={{
                            duration:0.5,
                            delay:index * 0.2
                        }}

                        >


                            <h2>

                            {
                                item
                            }

                            </h2>


                            <p>

                            {
                                item==="Backend"
                                ?
                                "Django REST Framework"
                                :
                                item==="Frontend"
                                ?
                                "React + JavaScript"
                                :
                                "Building scalable applications"
                            }

                            </p>


                        </motion.div>


                    ))
                }


            </div>


        </section>

    )

}


export default About;