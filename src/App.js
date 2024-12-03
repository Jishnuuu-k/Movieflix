import React, { useEffect, useState } from 'react'
import Axios from './Axios/Axios'
import './App.css'
function App() {
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState('')
  useEffect(() => {
    Axios.get('/new-horror').then((response)=>{
      console.log(response.data)
      setProducts(response.data.list) 
      
      
      let i = 0;
      setInterval(() => {
        console.log(i,"i-----")
        if(i> 23){
          i =0
        }else{
        setBanner(response.data.list[i])
          i++
        }
      }, 5000);
    })
  }, [])
  
  
  return (
    <div className="Body">
      <div className="Nav-Bar">
        <div className="Nav-Logo">
          <h3>Movie-Flix</h3>
        </div>
        <div className="Nav-Options">
          <div>Home</div>
          <div>Movies</div>
          <div>Series</div>
          <div>Sports</div>
        </div>
      </div>

      <div className="Banner">
        <div className="Banner-Contents">
          <div className="Banner-Details">
            <h1>{banner.title}</h1>
            <p>{banner.description}.</p>
          </div>
          <img src={banner.image} alt="" />
        </div>
        <div className="Gap">
        </div>
        <div className='row'>
              {
                products.map((obj)=>{
                    return(
                          <div className="card">
                            <div className="Image-Box">
                              <img src={obj.image} alt="" />
                            </div>
                            <div className="Deatil-Box">
                             <h3>Name :{obj.title} </h3>
                             <h3>Rating :{obj.imdbRating}</h3>
                             <h3>Released On :{obj.releasePeriod} </h3>
                            </div>
                          </div>
                    )
                })
              }
        </div>
        <div className="Gap">
        </div>
        {/* <div className='row'>
              {
                products.map((obj)=>{
                    return(
                          <div className="card">
                            <div className="Image-Box">
                            </div>
                            <div className="Deatil-Box">
                              <h2>{obj.originalTitleText.text}</h2>
                            </div>
                          </div>
                    )
                })
              }
        </div> */}
        <div className="Gap">
        </div>
        <div className="Footer">
      <div className="FooterContainer">
        <div className="FooterAbout">
          <h3>About Us</h3>
          <p>
            Under Building
          </p>
        </div>
        <div className="FooterLinks">
          <h3>Movie - Flix</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="FooterContact">
          <h3>Our Location</h3>
          <div className="MapContainer">
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.047984145713!2d76.29483119170055!3d9.973503527258208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872cb5271eca3%3A0x8a6c6b60f667b1e6!2sElamkulam%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682020!5e0!3m2!1sen!2sin!4v1725244168685!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="FooterFeedback">
          <h3>Feedback</h3>
          <form>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder=" Email" required />
            <textarea name="message" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="FooterBottom">
        <p>&copy; 2024 Movie - Flix Company. All rights reserved.</p>
      </div>
    </div>
      </div>
    </div>
  )
}
 export default App
