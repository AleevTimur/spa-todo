const addZero = (number) => {
  return number < 9 ? "0" + String(number) : number;
};

export const parseDate = (ISOString, withZero) => {
  const dateObject = new Date(ISOString);
  const getMonthName = (dateObject) => {
    const nameOfMonths = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "декабрь",
    ];
    const normalizeDate = (monthName) => {
      if (
        monthName[monthName.length - 1] === "ь" ||
        monthName[monthName.length - 1] === "й"
      ) {
        return monthName.slice(0, -1) + "я";
      } else {
        return monthName + "а";
      }
    };

    return normalizeDate(nameOfMonths[dateObject.getMonth()]);
  };

  const date = dateObject.getDate();
  const month = getMonthName(dateObject);
  const year = dateObject.getFullYear();
  const monthNumber = dateObject.getMonth() + 1;

  if (withZero) {
    return {
      date: addZero(date),
      monthNumber: addZero(monthNumber),
      month,
      year,
    };
  }

  return {
    date,
    month,
    monthNumber,
    year,
  };
};
