import React, { useState } from 'react';
import { button, polish, english } from './actionbutton.module.sass';

export default function ActionButton() {
  const [languige, setLanguige] = useState('PL');
  const changeLanguige = () => {
    if (languige === 'PL') {
      setLanguige('EN');
    } else {
      setLanguige('PL');
    }
  };
  return (
    <div className={button}>
      <div
        onClick={changeLanguige}
        className={languige === 'PL' ? polish : english}
      />
    </div>
  );
}
