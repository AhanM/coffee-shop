"use client";

import * as React from 'react'

// components
import Sidebar from './components/sidebar/sidebar';
// import Tables from "./views/tables"
// import routes from "./routes"

let routes = [
  {
    path: "/index",
    name: "Master List",
    icon: "ni ni-tv-2 text-primary",
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    layout: "/auth",
  }
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
      </>
        
  )
}