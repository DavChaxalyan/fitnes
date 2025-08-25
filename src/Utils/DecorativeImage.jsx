import PropTypes from 'prop-types';
import styles from './DecorativeImage.module.css';

export default function DecorativeImage({ src, alt, style }) {
  const positionStyle = {
    top,
    ...style,
  };

  return (
    <img
      src={src}
      alt={alt || ''}
      className={styles.decorative}
      style={positionStyle}
    />
  );
}

DecorativeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
};
