import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Detail from '../pages/detail'

class Router extends React.Component{
  render(){
    return(
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route
          path="/detail/:id"
          render={(props)=>(
            <Detail {...props}/>
          )}
        />
        <Route
          path="/about"
          render={(props)=>(
            <About {...props}/>
          )}
        />
        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
  }
}

export default Router