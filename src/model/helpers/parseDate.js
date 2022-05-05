export const parseDate = (ISOString) => {
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

  return {
    date,
    month,
    monthNumber,
    year,
  };
};
