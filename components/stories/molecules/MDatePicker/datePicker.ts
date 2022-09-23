interface Day {
  year: number;
  day: number;
  month: number;
  inMonth: boolean;
}

export function getCalendar(date: Date): Day[][] {
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const pageYear = first.getFullYear() % 4 ? notLeapYear : leapYear;
  let cnt = 1;
  let NextMonthCnt = 1;
  const firstMonth = first.getMonth();
  const prevMonth = first.getMonth() !== 0 ? first.getMonth() - 1 : 11;
  const ret1 = [];
  for (let i = 0; i < 6; i += 1) {
    const temp1 = [] as Day[];
    for (let j = 0; j < 7; j += 1) {
      if (i === 0) {
        if (j < first.getDay()) {
          temp1.push({
            day: pageYear[prevMonth] - (first.getDay() - j - 1),
            inMonth: false,
            year: first.getFullYear(),
            month: first.getMonth() - 1
          });
        } else {
          temp1.push({
            day: cnt,
            inMonth: true,
            year: first.getFullYear(),
            month: first.getMonth()
          });
          cnt += 1;
        }
      } else if (cnt <= pageYear[firstMonth]) {
        temp1.push({
          day: cnt,
          inMonth: true,
          year: first.getFullYear(),
          month: first.getMonth()
        });
        cnt += 1;
      } else if (cnt > pageYear[firstMonth]) {
        temp1.push({
          day: NextMonthCnt,
          inMonth: false,
          year: first.getFullYear(),
          month: first.getMonth() + 1
        });
        NextMonthCnt += 1;
      }
    }
    ret1.push(temp1);
  }
  return ret1;
}


export const format1 = (date: Date): string => {
  let ret = '';
  ret += date.getFullYear();
  ret += '/';
  ret +=
    date.getMonth() < 9
      ? '0' + Number(date.getMonth() + 1)
      : Number(date.getMonth() + 1);
  ret += '/';
  ret += date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  ret += ' ';
  ret += date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  ret += ':';
  ret += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return ret;
};

export const format2 = (date: Date): string => {
  let ret = '';
  ret += date.getFullYear();
  ret += '-';
  ret +=
    date.getMonth() < 9
      ? '0' + Number(date.getMonth() + 1)
      : Number(date.getMonth() + 1);
  ret += '-';
  ret += date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  // ret += ' ';
  // ret += date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  // ret += ':';
  // ret += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return ret;
};
