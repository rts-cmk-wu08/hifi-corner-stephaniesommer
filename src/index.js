import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Product from './Components/Product';
import Faq from "./Pages/Faq.js"
import About from './Pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path='/faq' element={<Faq />} />
      <Route path='/aboutus' element={<About />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);