import React, { useState } from 'react';
import styles from './ImageBox.module.sass';
import Button from './Button';

const ImageBox = (props) => {
  const { title = '', subtitle = '', image } = props;
  const [showImage, setShowImage] = useState(false);
  const toggleShowImage = () => {
    setShowImage((prevState) => !prevState);
  };

  return (
    <div
      data-testid="imageBox"
      className={`${styles.container} ${showImage && styles.expanded}`}
    >
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      {showImage && <img loading="lazy" alt={`${title} - ${subtitle}`} src={image} />}
      <Button label={showImage ? 'Hide Image' : 'Show Image'} onClick={toggleShowImage} />
    </div>
  );
};

export default ImageBox;
