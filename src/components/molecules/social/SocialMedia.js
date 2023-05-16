import Link from 'next/link';
import SVGIcon from '@/components/svgicon/svgicon';
import { icon, wrapper } from './socialmedia.module.sass';

const socials = [
  {
    name: 'Twitter',
    url: './assets/icons/Twitter.svg',
    address: 'https://twitter.com/Damian70464506',
    active: true,
  },
  {
    name: 'Linkedin',
    url: './assets/icons/Linkedin.svg',
    address: 'https://www.linkedin.com/in/damian-rabi%C5%84ski-07b265113/',
    active: true,
  },
  {
    name: 'Instagram',
    url: './assets/icons/Instagram.svg',
    address: 'https://github.com/rideek92',
    active: false,
  },
  {
    name: 'GitHub',
    url: './assets/icons/GitHub.svg',
    address: 'https://github.com/rideek92',
    active: true,
  },
];
export default function SocialMedia() {
  return (
    <div className={wrapper}>
      {socials.map((social) =>
        social.active ? (
          <Link key={social.name} href={social.address} target="_blank">
            <SVGIcon image={social.url} classElement={icon} />
          </Link>
        ) : null
      )}
    </div>
  );
}
