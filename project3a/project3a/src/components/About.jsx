import { Link } from "react-router-dom"
function About(){
    return(
        <>
         <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
                <br></br>
               
            
        <h1>This is About page</h1>
        </div>
        </>
    )
}

export default About