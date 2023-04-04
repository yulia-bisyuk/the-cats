export const columnStyle = (index) => {
  let column;
  if (index === 3 || index === 8 || index === 13 || index === 18) {
    column = "span 2";
  } else {
    column = null;
  }

  return column;
};

export const rowStyle = (index) => {
  let row;
  if (
    index === 0 ||
    index === 3 ||
    index === 7 ||
    index === 8 ||
    index === 10 ||
    index === 13 ||
    index === 17 ||
    index === 18
  ) {
    row = "span 2";
  } else {
    row = null;
  }

  return row;
};
