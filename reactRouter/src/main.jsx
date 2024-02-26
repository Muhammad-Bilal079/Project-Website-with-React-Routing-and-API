import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './components/Layout.jsx'
import  Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Gitsearch from './components/Gitsearch/Gitsearch.jsx'
import Github, { githubLoader }  from './components/Github/Github.jsx'

// routes bananay kay do tarikay hain  pehla yeah jo commint kia hai or dusra woh jo is kay nechay likha hai 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path :'',
//         element:<Home />
//       },{
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

// dusra tarika routes bananay ka
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gitsearch' element={<Gitsearch/>}/>
      <Route path='user/:userid' element={<User/>}/>
      
{/* yahan hum nay userId name sy perameter lia hai or yeah haimain wahan milay ga jo componenet hum nay yahan dia hai */}
{/* is kay through hum database say user ka data bhi manga saktay hain or dusra yeah kay jo bhi id ya name hamain yahan milta hai usay hum show bhi kara sktay hain  */}
  {/* is kay through hum dynamic data lay saktay hain user say */}
  <Route 
  loader={githubLoader}
  path='github' 
  element={<Github/>}/>
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
