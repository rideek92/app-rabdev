import { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@/components/context/AppContext';
import { page404, page404Button } from '../styles/Home.module.sass';

const massage404 = {
  PL: {
    description: 'Błąd 404, strona o podanym adresie nie istnieje',
    buttonMSG: 'Wróć do strony głownej',
  },
  EN: {
    description: '404 error ,page  not exist',
    buttonMSG: 'Back to main page',
  },
};
export default function error() {
  const context = useContext(AppContext);
  return (
    <div className={page404}>
      <h1>
        {context.pageLanguage === 'PL'
          ? massage404.PL.description
          : massage404.EN.description}
      </h1>
      <Link className={page404Button} href="/">
        {context.pageLanguage === 'PL'
          ? massage404.PL.buttonMSG
          : massage404.EN.buttonMSG}
      </Link>
    </div>
  );
}
