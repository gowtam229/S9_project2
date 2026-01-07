import { Link, useLocation } from "react-router-dom";
import "../components/styles.css"
function About(){
    const location = useLocation();
    return(
        <>
        
        <div className="head">
        <Link to="/">Main</Link> 
        <Link to="/home">Home</Link>
        <Link to="/about" state={{course:"ECE"}}>About</Link>
        <Link to="/Contact">Contact</Link>
        <br></br>
        </div>
        <h1>This is About page</h1>
        <p>I'M belongs to ........{location.state?.course}</p>
        </>
    )
}

export default About