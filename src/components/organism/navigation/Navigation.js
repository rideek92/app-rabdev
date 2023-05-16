import Link from 'next/link';
import SVGIcon from '@/components/svgicon/svgicon';
import { logo as styleLogo, wrapper } from './Navigation.module.sass';
import ActionButton from '@/components/molecules/buttonAction/actionbutton';
import SocialMedia from '@/components/molecules/social/SocialMedia';

const logo = { name: './assets/icons/logoRD.svg' };

export default function Navigation() {
  return (
    <div className={wrapper}>
      <Link href="/">
        <SVGIcon image={logo.name} classElement={styleLogo} />
      </Link>
      <SocialMedia />
      <ActionButton />
    </div>
  );
}
