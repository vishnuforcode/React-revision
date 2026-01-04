import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './pages/store/store';
import { RouterProvider } from 'react-router-dom';
import Layout from './pages/components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CountCoponent from './pages/countCoponent';
import CustomHooks from './pages/customHooks';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='counter' element={<CountCoponent/>}/>
      <Route path='customhooks' element={<CustomHooks/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <Provider store={store}>

  <RouterProvider router={router}> 
    <App />
    </RouterProvider>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
