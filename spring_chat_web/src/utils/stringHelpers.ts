let getSubstring = (str: string = '', maxNum: number = 20) => {
  if (str && str.length > maxNum) {
    return `${str.substring(0, maxNum)}...`;
  }
  return str;
};

export {getSubstring};
