import React from 'react';
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav style={{background:'red'}}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/introduce">Introduce</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/realproject">RealProject</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/decoratewedding">DecorateWedding</Link>
        </li>
        <li>
          <Link to="/organizeevents">OrganizeEvents</Link>
        </li>
        <li>
          <Link to="/weddingplanning">WeddingPlanning</Link>
        </li>
        <li>
          <Link to="*">NoPage</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Layout;
