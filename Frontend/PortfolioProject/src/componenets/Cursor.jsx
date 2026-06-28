import React, {useEffect, useState} from "react";
import "./Cursor.css";


function Cursor(){


    const [position,setPosition] = useState({
        x:0,
        y:0
    });


    const [hover,setHover] = useState(false);



    useEffect(()=>{


        const moveCursor=(e)=>{


            setPosition({

                x:e.clientX,

                y:e.clientY

            })


        }



        const addHover=()=>{

            setHover(true)

        }


        const removeHover=()=>{

            setHover(false)

        }



        window.addEventListener(
            "mousemove",
            moveCursor
        )


        const elements =
        document.querySelectorAll(
            "a,button"
        )


        elements.forEach((el)=>{

            el.addEventListener(
                "mouseenter",
                addHover
            )


            el.addEventListener(
                "mouseleave",
                removeHover
            )

        })



        return ()=>{


            window.removeEventListener(
                "mousemove",
                moveCursor
            )


        }


    },[])



    return(

        <div

        className={
            hover 
            ? "cursor hover"
            : "cursor"
        }


        style={{

            left:`${position.x}px`,

            top:`${position.y}px`

        }}

        >

        </div>

    )

}


export default Cursor;