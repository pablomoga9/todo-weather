import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

import ProductList from './List'
import Home from './Home';
import NotFound from '../NotFound';
import List from './List/List'
import Weather from './Weather';

export class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<List />} path={"/tasks"} />
          <Route element={<Weather />} path={"/weather"} />
          <Route element={<NotFound />} path={"/*"} />
        </Routes>
      </main>
    )
  }
}

export default Main