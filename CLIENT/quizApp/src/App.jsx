import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from '../src/UserDetails/User'
import Home from '../src/components/fetching/Pages/Home'
import SignUp from '../src/Buttons/SignUp'
import SignIn from '../src/Buttons/SignIn'
import Quiz from '../src/Quizzes/Quiz'
import General from '../src/Categories/General'
import Books from '../src/Categories/Books'
import Film from '../src/Categories/Film'
import Music from '../src/Categories/Music'
import Television from '../src/Categories/Television'
import VideoGames from '../src/Categories/VideoGames'
import BoardGames from '../src/Categories/BoardGames'
import Nature from '../src/Categories/Nature'
import Computers from '../src/Categories/Computers'
import Maths from '../src/Categories/Maths'
import Mythology from '../src/Categories/Mythology'
import Sports from '../src/Categories/Sports'
import Geography from '../src/Categories/Geography'
import History from '../src/Categories/History'
import Politics from '../src/Categories/Politics'
import Art from '../src/Categories/Art'
import Celebrities from '../src/Categories/Celebrities'
import Animals from '../src/Categories/Animals'
import Vehicles from '../src/Categories/Vehicles'
import Comics from '../src/Categories/Comics'
import Gadgets from '../src/Categories/Gadgets'
import Anime from '../src/Categories/Anime'
import Animations from '../src/Categories/Animations'
import QuizCreate from '../src/QuizCreation/QuizCreate'
import TermsOfService from './footer/Terms'
import PrivacyPolicy from './footer/Privacy'
import Security from './footer/Security'
import Contact from './footer/Contact'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home> },{
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },{
      path: '/startquiz',
      element: <Quiz></Quiz>
    },
    {
path: '/generalquestions',
element: <General></General>
    },
    {
      path: '/books',
      element: <Books></Books>
    },{
      path: '/film',
      element: <Film></Film>
    },
    {
      path: '/music',
      element: <Music></Music>
    },
    {
      path: '/tv',
      element: <Television></Television>
    },
    {
      path: '/videogames',
      element: <VideoGames></VideoGames>
    },
    {
      path: '/boardgames',
      element: <BoardGames></BoardGames>
    },
    {
      path: '/nature',
      element: <Nature></Nature>
    },
    {
      path: '/computers',
      element: <Computers></Computers>
    },
    {
      path: '/maths',
      element: <Maths></Maths>
    },
    {
      path: '/mythology',
      element: <Mythology></Mythology>
    },
    {
      path: '/sports',
      element: <Sports></Sports>
    },{
      path:'/geography',
      element: <Geography></Geography>
    },
    {
      path: 'history',
      element: <History></History>
    },
    {
      path: '/politics',
      element: <Politics></Politics>
    },
    {
      path:'/art',
      element:<Art></Art>

    },
    {
      path: '/celebrities',
      element: <Celebrities></Celebrities>
    },
    {
      path: '/animals',
      element: <Animals></Animals>
    },
    {
      path: '/vehicles',
      element: <Vehicles></Vehicles>
    },
    {
      path: '/comics',
      element: <Comics></Comics>
    },
    {
      path: '/gadgets',
      element: <Gadgets></Gadgets>
    },

    {
      path: '/anime',
      element: <Anime></Anime>
    },
    {
      path: '/animations',
      element: <Animations></Animations>
    },
    {
      path: '/createquiz',
      element: <QuizCreate></QuizCreate>
    },{
      path: '/user',
      element: <User></User>
    },{
      path: '/terms',
      element:<TermsOfService></TermsOfService>
    },
    {
      path: '/privacy',
      element:<PrivacyPolicy></PrivacyPolicy>
    },{
      path:'/security',
      element:<Security></Security>
    }
,
{
  path: '/contact',
  element:<Contact></Contact>
}
  ])
function App() {

  return (
    <>
  <RouterProvider router= {router} />
    </>
  )
}

export default App
