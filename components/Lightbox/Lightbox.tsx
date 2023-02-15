import React, { useState } from 'react';
import styles from './Lightbox.module.css';

interface LighboxProps {
  children: any;
  buttonCopy: string;
  Wrapper?: any;
  title?: string;
}

const LightBox = ({
  children,
  buttonCopy,
  title,
  Wrapper = 'div'
}: LighboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <button onClick={toggleIsOpen}>{buttonCopy}</button>
      {isOpen ? (
        <div className={styles.container}>
          <div className={styles.top}>
            <h2>{title}</h2>
            <button className={styles.close} onClick={toggleIsOpen}>
              x
            </button>
          </div>
          {children}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;
