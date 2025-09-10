/*import React from 'react'
import "./Calling.css";
import Navbar from '../../components/Navbar/Navbar';

const Calling = () => {
  return (
    <div>
        <Navbar />
        <div>
        <div>
            <img src={calling} alt="Calling" />
        </div>
        <div>
            
        </div>
         </div>
    </div>
  )
}

export default Calling;
import React from 'react'
import "./Calling.css";
import Navbar from '../../components/Navbar/Navbar';
import calling from "./../../assets/calling.png";



function Calling() {
      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Submitted Successfully !!😊");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div>
        <Navbar />
        <div className="calling-container">
            <div className="image-container">
                <img src={calling} alt="Calling" />
            </div>
            <div>
              <form onSubmit={onSubmit} className="contact-form">
            
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
           
             
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
              <label htmlFor="message">Write your message here</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="10" required></textarea>
              <button type='submit' className='submit-btn'>Let's Go</button>
              <span className='result'>{result}</span>
          </form>
            </div>
        </div>
    </div>
  )
}

export default Calling; */
import React from "react";
import "./Calling.css";
import Navbar from "../../components/Navbar/Navbar";
import calling from "./../../assets/calling.png";

function Calling() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully! 🎉");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="calling-container">
        {/* Left side image */}
        <div className="image-container">
          <img src={calling} alt="Calling" />
        </div>

        {/* Right side form */}
        <div className="form-container">
          <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="8"
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Let's Go 🚀
            </button>
            <span className="result">{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calling;

