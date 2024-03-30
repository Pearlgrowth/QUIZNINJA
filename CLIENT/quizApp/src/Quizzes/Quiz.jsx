import React from "react";
import {Link} from 'react-router-dom'
import './Quiz.css'
import image from './images/sports.jpg'
import maths from './images/maths.jpg'
import computers from './images/computers.jpg'
import art from './images/art.avif'
import history from './images/history.png'
import animals from './images/animals.jpeg'
import music from './images/music.jpeg'
import books from './images/books.jpeg'
import anime from './images/anime.jpeg'
import profile from './images/profile.webp'
import QuizSearch from '../SearchComponent/Search'
function quizHomePage() {
  const handleSports = ()=>{
    window.location.href= '/sports'
  }
  const handleMaths = ()=>{
    window.location.href= '/maths'
  }
  const handleComputers= ()=>{
    window.location.href= '/computers'
  }
  const handleArt = ()=>{
    window.location.href = '/art'
  }
  const handleHistory = ()=>{
    window.location.href= '/history'
  }
  const handleAnimals = ()=>{
    window.location.href= '/animals'
  }
  const handleMusic = ()=>{
    window.location.href='/music'
  }
  const handleBooks = ()=>{
    window.location.href='/books'
  }
  const handleAnime = ()=>{
    window.location.href='/anime'
  }
  const handleQuizCreation = ()=>{
    window.location.href='/createquiz'
  }
 const user = ()=>{
  window.location.href= '/user'
 }
  return (
    <>
      <div className="container4">
        <div className="new">
        <div className="navbar">
          <div className="right">
          <Link to = '/'><p className="phome">QUIZ NINJA</p></Link>
            <div className="dropdown">
              <button className="dropbtn">Take Quizzes</button>
              <div className="dropdownContent">
              <Link to="/animations">Animations</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/animals">Animals</Link>
      <Link to="/art">Art</Link>
      <Link to="/boardgames">Board Games</Link>
      <Link to="/books">Books</Link>
      <Link to="/celebrities">Celebrities</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/computers">Computers</Link>
      <Link to="/film">Film</Link>
      <Link to="/gadgets">Gadgets</Link>
      <Link to="/generalquestions">General Knowledge</Link>
      <Link to="/geography">Geography</Link>
      <Link to="/history">History</Link>
      <Link to="/maths">Maths</Link>
      <Link to="/music">Music</Link>
      <Link to="/mythology">Mythology</Link>
      <Link to="/nature">Nature</Link>
      <Link to="/politics">Politics</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/tv">Television</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/videogames">Video Games</Link>

                </div>
            </div>
            <button onClick = {handleQuizCreation}>Create a Quiz</button>
            <QuizSearch></QuizSearch>
            {/* <input type="text" value= 'Search Quizzes' /> */}
          </div>
         
          <div className="profile">
            <img src= {profile} alt="" onClick= {user} id = 'profile' />
          </div>
        </div> <hr />
        <div className="body">
           <h3>Best Online Quizzes that you can find  !</h3> 
           <p> To keep yourself entertained and educated is just a quiz away. Want to have some fun or learn about a topic? Take a quiz today to discover amazing facts about yourself or the world.</p>
           <p> Take quizzes with your friends to see who wins,  get bragging rights as the top-ranked player in your quiz community.</p>
           <p><b>LET'S GET STARTED! </b> <hr />
           </p> 
           <h3>Featured Quizzes!!</h3>
           <div className="imagezz">
           <p><img src= {image} alt="sports" onClick = {handleSports} className= 'images' /> <br /> Sports Quizzes.  <br />Test your sports knowledge.</p>  
           <p><img src= {maths} alt="maths" onClick = {handleMaths} className= 'images' /> <br /> Mathematics Quizzes. <br />Are you good with numbers?</p> 
           <p><img src= {computers} alt="computer" onClick = {handleComputers} className= 'images' /> <br /> Computer Quizzes. <br />1 + 1 = 10?🤐</p> 
           </div> <hr /><hr /><hr /><hr /><hr />
           <div className="imagezz2">
           <p><img src= {art} alt="art" onClick = {handleArt} className= 'images' /> <br /> Art Quizzes. <br />Art is long, life is short!</p> 
           <p><img src= {history} alt="history" onClick = {handleHistory} className= 'images' /> <br /> History Quizzes. <br />History is a set of lies agreed upon?</p> 
           <p><img src= {animals} alt="animals" onClick = {handleAnimals} className= 'images' /> <br /> Animal Quizzes. <br />Are you an eagle beaver?</p> 
           
           </div> <hr /><hr /><hr /><hr /><hr />
           <div className="imagezz2">
           <p><img src= {music} alt="music" onClick = {handleMusic} className= 'images' /> <br /> Music Quizzes. <br />What's your music taste?</p> 
           <p><img src= {books} alt="books" onClick = {handleBooks} className= 'images' /> <br /> Books Quizzes. <br />Book Worm? Test that!</p> 
           <p><img src= {anime} alt="anime" onClick = {handleAnime} className= 'images' /> <br /> Anime Quizzes. <br />こんにちわ, Konnichiwa.</p> 
           
           </div>
           <div className="footer">
           <Link to = '/'><p id="qhome">QUIZ NINJA</p></Link>
           <Link to ='/terms'><p className = 'link'>TERMS</p></Link>
           <Link to ='/privacy'><p className= 'link'>PRIVACY</p></Link>
           <Link to ='/security'><p className= 'link'>SECURITY</p></Link>
           <Link to ='/contact'><p className= 'link'>CONTACT</p></Link>
        </div>
        </div> 
        
        </div>
        
      </div>
      
    </>
  );
}

export default quizHomePage;
