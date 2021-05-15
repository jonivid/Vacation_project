import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { Menu } from '../menu/Menu'
import { Login } from '../Login/Login'
import { Register } from '../register/Register'
import { HomePage } from '../home/HomePage'

export const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'><HomePage /></Route>
                <Route exact path='/users/login'><Login /></Route>
                <Route exact path='/users/register'><Register /></Route>
                <Redirect from='/' to='/home' />

            </Switch>
        </div>
    )
}
