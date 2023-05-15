import Link from 'next/link';
import { item, listElement } from './Menu.module.sass';

const nav = [
  {
    pl: 'moje projekty',
    en: 'my projects',
    link: '/',
    active: true,
  },
  {
    pl: 'kim jestem',
    en: 'who am i',
    link: '/aboutme',
    active: true,
  },
  {
    pl: 'moje hobby',
    en: 'my hobbys',
    link: '/hobbys',
    active: true,
  },
  {
    pl: 'moje umiętności',
    en: 'my skills',
    link: '/skills',
    active: true,
  },
  {
    pl: 'blog',
    en: 'blog',
    link: '/blog',
    active: false,
  },
  {
    pl: 'kontakt',
    en: 'concact',
    link: '/concact',
    active: true,
  },
];

export default function Menu() {
  return (
    <>
      <ul className={listElement}>
        {nav.map((element) =>
          !element.active ? (
            ''
          ) : (
            <Link key={element.link} href={element.link} className={item}>
              {element.en}
            </Link>
          )
        )}
      </ul>
    </>
  );
}
