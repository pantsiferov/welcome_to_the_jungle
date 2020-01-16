import moment from 'moment';

const humanReadableFormat = 'YYYY-MM-DD-HH:mm';

export function dateToShow(date) {
  return moment(date).format(humanReadableFormat);
}


export function dateStringToTimeStamp(dateString) {
  const date = moment(dateString, humanReadableFormat);
  return date.valueOf();
}


export function dateToTimeStamp(dateString) {
  const date = moment(dateString);
  return date.valueOf();
}
