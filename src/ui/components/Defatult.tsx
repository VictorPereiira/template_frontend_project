import tw from "tailwind-styled-components"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from "react";

// Animation
import "@animations/default.css"

// Icons
import icon1 from "@icons/icon1.svg"

// Imgs
import img1 from "@imgs/img1.png"

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Default_Component({ func }: any) {
    //  code logic

    return (
        <Wrapper>
            {/* content here...*/}
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow
    h-screen
`

export default Default_Component;
