export const columnStyle = index => {
  let column;
  switch (index) {
    case 0:
      column = null;
      break;
    case 1:
      column = null;
      break;
    case 2:
      column = null;
      break;
    case 3:
      column = 'span 2';
      break;
    case 4:
      column = null;
      break;
    case 5:
      column = null;
      break;
    case 6:
      column = null;
      break;
    case 7:
      column = null;
      break;
    case 8:
      column = 'span 2';
      break;
    case 9:
      column = null;
      break;
    default:
      column = null;
  }
  return column;
};

export const rowStyle = index => {
  let row;
  switch (index) {
    case 0:
      row = 'span 2';
      break;
    case 1:
      row = null;
      break;
    case 2:
      row = null;
      break;
    case 3:
      row = 'span 2';
      break;
    case 4:
      row = null;
      break;
    case 5:
      row = null;
      break;
    case 6:
      row = null;
      break;
    case 7:
      row = 'span 2';
      break;
    case 8:
      row = 'span 2';
      break;

    case 9:
      row = null;
      break;

    default:
      row = null;
  }
  return row;
};
