import { DateTime } from "luxon";

const getAveragePages = (startDate, finishDate, totalPages) => {
  const start = DateTime.fromISO(startDate);
  const finish = DateTime.fromISO(finishDate);
  const duration = finish.diff(start, 'days').toObject()?.days + 1;
  return Math.ceil(totalPages / duration);
}

export default getAveragePages