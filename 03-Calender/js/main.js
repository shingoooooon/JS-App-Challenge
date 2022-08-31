const year = 2022;
const month = 7; // August

function getCalenderHead() {
  const dates = [];
  const d = new Date(year, month, 0).getDate();
  const n = new Date(year, month, 1).getDay();
  for (let i = 0; i < n; i++){
    dates.unshift({
      date: d - i,
      isToday: false,
      isDisabled: true,
    });
  };
  console.log(dates);
}

function getCalenderTail() {
  const dates = [];
  const lastDay = new Date(year, month + 1, 0).getDay();
  for (let i = 1; i < 7 - lastDay; i++){
    dates.push({
      date: i,
      isToday: false,
      isDisabled: true,
    });
  }
  console.log(dates);
}

function getCalenderBody() {
  dates = [];
  lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= lastDate; i++) {
    dates.push({
      date: i,
      isToday: false,
      isDisabled: false,
    });
  };
  console.log(dates);
}


getCalenderHead()
getCalenderBody()
getCalenderTail()
