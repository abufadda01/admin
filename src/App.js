import Home from "./pages/home/Home";
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New' 
import { userInputs , productInputs } from "./formSource";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import "./style/dark.scss"
import { useState } from "react";
import {useDarkModeContext} from "./context/darkModeContext"



function App() {

  const {darkMode} = useDarkModeContext()

  return (
    <div className={darkMode ? "App dark" : "App"}>
      
      <Router>

        <Routes>

          <Route path="/">
            
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />

            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add a New User" btn="Add User" />} />
            </Route>

            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add a New Product" btn="Add Product" />} />
            </Route>

          </Route>

        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
