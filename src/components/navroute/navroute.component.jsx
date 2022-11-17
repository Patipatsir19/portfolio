import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../../pages/home.component";
import Story from "../../pages/story/story.component";
import Experience from "../../pages/experience/experience.component";
import Education from "../../pages/education/education.component";
import Certificate from "../../pages/Certificate/certificate.component";

const NavRoute = () => {
  const element = useRoutes([
    {path:"/edcation", element: <Education/>},
    {path:"/certificate", element: <Certificate/>},
    {path:"/experience", element: <Experience/>},
    {path:"/story", element: <Story/>},
    {path:"/", element:<Home/>}
  ])

  return element;
};

export default NavRoute;