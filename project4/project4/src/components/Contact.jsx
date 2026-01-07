import { Link } from "react-router-dom"
import "../components/styles.css"

function Contact() {
  return (
    <div>
      <div className="head">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about" state={{course:"ECE"}}>About</Link>
        <Link to="/Contact">Contact</Link>
        <br></br>
      </div>
      <div class="main">
        <img src="pic,png.jpg" alt="Contact" style={{ width: "100%", height: "300px" }} />
        <div>
          <h3>Contact</h3>
          <p>Name: y.gowtham</p>
          <p>ID: 2500040229</p>
          <p>Program: B.tech</p>
          <p>Branch:ECE</p>
          <p>Email:gowtham@gmail.com</p>
          <p>Phone No:9347988988</p>
          <p>github: https://github.com/gowtam229
        //github.com/gowtam229</p>
        </div>
      </div>

    </div>
  )
}

export default Contact