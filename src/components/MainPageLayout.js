import React from 'react'
import Navs from './Navs'
import Title from './Title'
function MainPageLayout({children}) {
  return (
    <div>
        <Title title="Movie Adda" subtitle="Looking for a movie or an actor?">

        </Title>
        <Navs/>
            {children}
    </div>
  )
}

export default MainPageLayout