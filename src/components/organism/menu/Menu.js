import Link from 'next/link';
import { useContext } from 'react';
import { item, listElement } from './Menu.module.sass';
import AppContext from '@/components/context/AppContext';

const nav = [
  {
    pl: 'projekty',
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
    pl: 'umiętności',
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
  const context = useContext(AppContext);

  return (
    <>
      <ul className={listElement}>
        {nav.map((element) =>
          !element.active ? (
            ''
          ) : (
            <Link key={element.link} href={element.link} className={item}>
              {context.pageLanguage === 'PL' ? element.pl : element.en}
            </Link>
          )
        )}
      </ul>
    </>
  );
}
