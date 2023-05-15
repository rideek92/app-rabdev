import '@/styles/globals.sass';
import { useState } from 'react';
import Navigation from '@/components/organism/navigation/Navigation';
import Fotter from '@/components/organism/footer/Footer';
import Menu from '@/components/organism/menu/Menu';
import Wrapper from '@/components/organism/wrapper/Wrapper';
import { mainWrapper } from '../styles/Home.module.sass';

import AppContext from '@/components/context/AppContext';

export default function App({ Component, pageProps }) {
  const [pageLanguage, setPageLanguge] = useState('PL');
  return (
    <AppContext.Provider value={{ pageLanguage, setPageLanguge }}>
      <Wrapper>
        <Navigation />
        <div className={mainWrapper}>
          <Menu />
          <Component {...pageProps} />
        </div>
        <Fotter />
      </Wrapper>
    </AppContext.Provider>
  );
}
