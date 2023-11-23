"use client";

import * as React from 'react'

// components
import Sidebar from './components/sidebar/sidebar';
import ArgonTable from './views/argonTable';
// import Tables from "./views/tables"
// import routes from "./routes"

let routes = [
  {
    path: "/index",
    name: "Study Spots",
    icon: "ni ni-tv-2 text-primary",
    layout: "/admin",
  },
];

export default function Home() {

  return (
      <>
        <Sidebar
          logo={{
            innerLink: "/index",
            outerLink: "none",
            imgSrc: "/assets/img/brand/argon-react.png",
            imgAlt: "Logo"
          }}
          routes={routes}
        />
        <div className="main-content">
          <ArgonTable />  
        </div>
      </>
        
  )
}