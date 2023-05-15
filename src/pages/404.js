import { useContext } from 'react';
import AppContext from '@/components/context/AppContext';

export default function error() {
  const context = useContext(AppContext);
  return (
    <>
      <div>
        <h1>404 page not existe</h1>
        <p>{context.nameContetext}</p>
      </div>
    </>
  );
}
