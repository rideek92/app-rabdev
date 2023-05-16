import '@/styles/globals.sass';
import { useLocalStorage } from '@hulkhooks/use-localstorage';
import Navigation from '@/components/organism/navigation/Navigation';
import Fotter from '@/components/organism/footer/Footer';
import Menu from '@/components/organism/menu/Menu';
import Wrapper from '@/components/organism/wrapper/Wrapper';
import { mainWrapper, mainElement } from '../styles/Home.module.sass';

import AppContext from '@/components/context/AppContext';

export default function App({ Component, pageProps }) {
  const [pageLanguage, setPageLanguge] = useLocalStorage('Language', 'PL');

  return (
    <AppContext.Provider value={{ pageLanguage, setPageLanguge }}>
      <Wrapper>
        <Navigation />
        <div className={mainWrapper}>
          <Menu />
          <div className={mainElement}>
            <Component {...pageProps} />
          </div>
        </div>
        <Fotter />
      </Wrapper>
    </AppContext.Provider>
  );
}
