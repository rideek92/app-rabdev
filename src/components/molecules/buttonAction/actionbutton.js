import { useContext } from 'react';
import { button } from './actionbutton.module.sass';
import AppContext from '@/components/context/AppContext';

export default function ActionButton() {
  const context = useContext(AppContext);
  const changeLangugie = () => {
    if (context.pageLanguage === 'PL') {
      context.setPageLanguge('EN');
    } else {
      context.setPageLanguge('PL');
    }
  };
  return (
    <div className={button} onClick={changeLangugie}>
      <div />
    </div>
  );
}
