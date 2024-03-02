import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from './pages/Introduce';
import Service from './pages/Service';
import RealProject from './pages/RealProject';
import Video from './pages/Video';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage'; 
import Home from './pages/Home';
import DecorateWedding from './pages/DecorateWedding';
import OrganizeEvents from './pages/OrganizeEvents';
import WeddingPlanning from './pages/WeddingPlanning';
import Navigation from './component/layout/Navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/introduce" element={<Introduce />} />
    <Route path="/service" element={<Service />} />
    <Route path="/realproject" element={<RealProject />} />
    <Route path="/video" element={<Video />} />
    <Route path="/" element={<Blog/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/decoratewedding" element={<DecorateWedding />} />
    <Route path="/organizeevents" element={<OrganizeEvents />} />
    <Route path="/weddingplanning" element={<WeddingPlanning />} />
    <Route path="*" element={<NoPage />} />
    </Routes>

  </BrowserRouter>
);


