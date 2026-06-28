import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";


function Footer(){

    return(

        <motion.footer

        className="footer"


        initial={{
            opacity:0
        }}


        whileInView={{
            opacity:1
        }}


        transition={{
            duration:0.8
        }}

        >


            <h2>
                Jithin Biju A
            </h2>



            <p>
                Full Stack Developer | React & Django
            </p>




            <div className="social-links">


                <a 
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                >
                    GitHub
                </a>



                <a 
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                >
                    LinkedIn
                </a>


            </div>




            <p className="copyright">

                © 2026 Jithin. All rights reserved.

            </p>



        </motion.footer>

    )

}


export default Footer;