import React from 'react'

import Layout from '../components/Layout/Layout'
import Landing from '../components/Landing/Landing'
import HomeWhy from '../components/HomeWhy/HomeWhy'
import HomeProj from '../components/HomeProj/HomeProj'
import HomeFeed from '../components/HomeFeed/HomeFeed'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <HomeWhy />
      <HomeProj />
      <HomeFeed />
    </Layout>
  )
}
export default Home
