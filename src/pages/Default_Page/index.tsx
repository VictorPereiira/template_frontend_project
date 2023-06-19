import tw from "tailwind-styled-components"

// Icons
import info from '../../assets/icons/info.svg'

// Components

// Structure
function Default_Page() {
    return (
        <Wrapper>
            <img src={info} />
            <h1 className="p-5 text-6xl text-white1">Default Page</h1>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
`


export default Default_Page;