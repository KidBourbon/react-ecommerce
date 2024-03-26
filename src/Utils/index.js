import defaultImage from '../Assets/default-image.jpg';

// Format a value of a given price
const formatPrice = price =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

// Load default image in case of loading error
const onImageLoadError = event => {
  event.target.src = defaultImage;
  event.target.onerror = null;
};

export { formatPrice, onImageLoadError };
