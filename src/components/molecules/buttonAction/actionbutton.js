import { useContext } from 'react';
import { button, action } from './actionbutton.module.sass';
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
    <div className={button}>
      <div
        style={
          context.pageLanguage === 'PL'
            ? {
                color: 'white',
                backgroundColor: '#671164',
                padding: '0 10px',
                fontSize: '15px',
              }
            : null
        }
        className={action}
        onClick={changeLangugie}
      >
        PL
      </div>
      <div
        style={
          context.pageLanguage === 'EN'
            ? {
                color: 'white',
                backgroundColor: '#671164',
                padding: '0 10px',
                fontSize: '15px',
              }
            : null
        }
        className={action}
        onClick={changeLangugie}
      >
        EN
      </div>
    </div>
  );
}
