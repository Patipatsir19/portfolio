import React, {Fragment} from 'react'
import { Outlet } from 'react-router-dom'

import Intro from '../components/intro/intro.component'

const Home = () => {
  return (
    <Fragment>
      <Outlet/>
      <Intro />
    </Fragment>
  )
}

export default Home