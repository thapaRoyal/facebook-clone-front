import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Header from '../../components/Header';
import useClickOutside from '../../helpers/clickOutside';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const el = useRef(null);

  useClickOutside(el, () => {
    setVisible(false);
  });

  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
};

export default Home;
