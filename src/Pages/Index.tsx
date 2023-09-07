import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"


const Layout = () => {

    return(
        <>
        <ul>
          <li>
            <Link to="/quiz"><Button margin='10px'  minWidth='130px' minHeight='60px' borderRadius='10px' backgroundColor='#FFC436' color='#FFFFFF'>Quiz</Button></Link>
          </li>
          <li>
            <Link to="/search"><Button margin='10px' minWidth='130px' minHeight='60px' borderRadius='10px' backgroundColor='#FFC436' color='#FFFFFF'>Search</Button></Link>
          </li>
        </ul>
        </>
    )

}

export default Layout