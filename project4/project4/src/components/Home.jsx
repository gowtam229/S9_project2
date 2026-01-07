import { Link } from "react-router-dom";
import "../components/styles.css"
function Home(){


    return(
        <>
      <div className="head">
        <Link to="/">Main</Link> 
        <Link to="/home">Home</Link>
        <Link to="/about" state={{course:"ECE"}}>About</Link>
        <Link to="/Contact">Contact</Link>
        <br></br>
        </div>
        <h1>This is home page</h1>
        </>
    )
}

export default Home