import { useContext } from 'react';
import AppContext from '@/components/context/AppContext';

export default function Home() {
  const context = useContext(AppContext);
  return (
    <>
      <div>
        <h1>Moje projekty</h1>
      </div>
    </>
  );
}
