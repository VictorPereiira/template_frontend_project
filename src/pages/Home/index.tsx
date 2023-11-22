import tw from "tailwind-styled-components"
import { useEffect, useRef, useState } from "react"

// Styles
import '@animations/animate-pulse.css'

// Icons

// Imgs

// Components

// Sections

// Structure
function Home() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const OpenMenu = () => {
        setMobileMenu(!mobileMenu);
    };


    return (
        <Wrapper>
            <Mobile>
                {/* content here */}
            </Mobile>
            {
                // mobileMenu && (<MobileMenu func={OpenMenu} />)
            }
            {/* Desktop */}
            <Desktop className="lg:flex flex-col pt-[40px]">
                {/* content here */}
            </Desktop>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`
    bg-black1
`

const Mobile = tw.section`
    lg:hidden
    px-[20px]
`
const Desktop = tw.section`
    hidden
`

export default Home;