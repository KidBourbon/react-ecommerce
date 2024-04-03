import defaultImage from '../Assets/default-image.jpg';

// Format a value of a given price
const formatPrice = price => {
  if (price) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }

  return '$0.00';
};

// Load default image in case of loading error
const onImageLoadError = event => {
  event.target.src = defaultImage;
  event.target.onerror = null;
};

// Gets the last segment of the current path
const getLastSegmentOfCurrentPath = () => {
  const currentPath = window.location.pathname;
  const lastSegment = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  return lastSegment;
};

// Gets the last segment of a given path
const getLastSegmentOfGivenPath = path => path.substring(path.lastIndexOf('/') + 1);

export { formatPrice, onImageLoadError, getLastSegmentOfCurrentPath, getLastSegmentOfGivenPath };
