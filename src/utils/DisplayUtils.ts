const cleanString = (value: string) => value.replace(
  'undefined', 
  'No Informations'
);
const arrayToString = <T>(array?: T[]): string => 
  cleanString(`${array?.toString()}`);

const limitStringSize = (
  value: string, 
  limit: number
): string => cleanString(`${value?.substring(0, limit)}...`);

export {
  arrayToString,
  limitStringSize
}