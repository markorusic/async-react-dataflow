import React from 'react'
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'
import PostPage from './PostPage'
import HomePage from './HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/posts/:id">
            <PostPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
