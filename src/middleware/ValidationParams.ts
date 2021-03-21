const isString = (value: string): boolean => {
  const regex = new RegExp('^[a-zA-Z0-9]')
  
  return regex.test(value);
}

export {
  isString,
}