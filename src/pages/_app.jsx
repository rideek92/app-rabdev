import '@/styles/globals.sass';
import Navigation from '@/components/organism/navigation/Navigation';
import Fotter from '@/components/organism/footer/Footer';
import Menu from '@/components/organism/menu/Menu';
import Wrapper from '@/components/organism/wrapper/Wrapper';
import { mainWrapper } from '../styles/Home.module.sass';

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Navigation />
      <div className={mainWrapper}>
        <Menu />
        <Component {...pageProps} />
      </div>
      <Fotter />
    </Wrapper>
  );
}
