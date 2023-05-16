import Link from 'next/link';
import SVGIcon from '@/components/svgicon/svgicon';
import classes from './socialmedia.module.sass';

const socials = [
  {
    name: 'GitHub',
    url: './assets/icons/GitHub.svg',
    address: 'https://github.com/rideek92',
  },
  {
    name: 'GitHub',
    url: './assets/icons/GitHub.svg',
    address: 'https://github.com/rideek92',
  },
];
export default function SocialMedia() {
  return (
    <>
      {socials.map((social) => (
        <Link href={social.address} target="_blank">
          <SVGIcon image={social.url} classElement={classes.icon} />
        </Link>
      ))}
    </>
  );
}
