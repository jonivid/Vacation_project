import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Menu } from '../menu/Menu'
import { Login } from '../Login/Login'
import { Register } from '../register/Register'
import { HomePage } from '../home/HomePage'
import { AdminBoard } from '../adminBoard/AdminBoard'

export const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'><HomePage /></Route>
                <Route exact path='/users/login'><Login /></Route>
                <Route exact path='/users/register'><Register /></Route>
                <Route exact path='/admin'><AdminBoard /></Route>
                <Route exact path='/'><Login /></Route>
            </Switch>
        </div>
    )
}
