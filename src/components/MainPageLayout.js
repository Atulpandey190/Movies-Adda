import React from 'react';
import Navs from './Navs';
import Title from './Title';
import Footer from './Footer'
const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Movies Adda"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainPageLayout;
