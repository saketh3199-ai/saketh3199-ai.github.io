import React from 'react'

import NavigationBar from './components/NavigationBar'

import Home from "./components/Home"



import {Switch,Route} from "react-router-dom"

import "./App.css"

const App = ()=>
{
  const WebPage=
  <>
   <NavigationBar />
   <Switch>
        <Route exact path="/" component={Home} />
        
   </Switch>
  </>
  
  return WebPage
}

export default App