import moment from 'moment';

// capitalize two+ words
export const capitalize = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }
  // input = san francisco
  return value
    .split(' ') // ['san', 'francisco']
    .map((word) => word[0].toUpperCase() + word.slice(1)) // ['San', 'Francisco']
    .join(' '); // San Francisco
};

// return the last word of a sentence
export const lastWord = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }
  // San Francisco
  return value
    .split(' ') // ['san', 'francisco']
    .splice(-1); // Francisco
};

// return pluralized word
export const pluralize = (value) => {
  if (!value || typeof value !== 'string') {
    return;
  }
  // input = property -> P + roperty -> Properties
  if (value === 'category') {
    return 'Categories';
  } else if (value === 'property') {
    return 'Properties';
  } else {
    return value[0].toUpperCase() + value.slice(1) + 's';
  }
};

// format date
export const formatDate = (date, dateFormat = 'DD/MM/YYYY') => {
  if (!date || typeof date !== 'string') {
    return 'pending';
  }
  return moment(date).format(dateFormat);
};
