import React, {useState} from "react";
import api from "../api";
import "./Contact.css";
import { motion } from "framer-motion";


function Contact(){


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        message:""

    })



    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        })

    }




    const handleSubmit=(e)=>{

        e.preventDefault();


        api.post("contact/",formData)

        .then(()=>{


            alert("Message sent successfully")


            setFormData({

                name:"",
                email:"",
                message:""

            })


        })


    }



    return(


        <section id="contact" className="contact">


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

                Contact Me

            </motion.h1>




            <motion.form


            onSubmit={handleSubmit}



            initial={{

                opacity:0,

                scale:0.8

            }}



            whileInView={{


                opacity:1,

                scale:1


            }}



            transition={{


                duration:0.6


            }}



            >



                <input

                type="text"

                name="name"

                placeholder="Your Name"

                value={formData.name}

                onChange={handleChange}

                />




                <input

                type="email"

                name="email"

                placeholder="Your Email"

                value={formData.email}

                onChange={handleChange}

                />





                <textarea

                name="message"

                placeholder="Your Message"

                value={formData.message}

                onChange={handleChange}

                />




                <motion.button


                whileHover={{

                    scale:1.08

                }}



                whileTap={{

                    scale:0.95

                }}


                >

                    Send Message


                </motion.button>



            </motion.form>


        </section>


    )

}


export default Contact;