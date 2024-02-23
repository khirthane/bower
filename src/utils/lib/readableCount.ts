export const readableClount = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'm';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  } else {
    return count.toString();
  }
};
