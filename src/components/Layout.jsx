import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/contact" exact component={Contact}/>

            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Layout
