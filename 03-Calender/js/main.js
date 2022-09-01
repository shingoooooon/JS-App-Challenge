let today = new Date();
let todaydate = today.getDate();
let year = today.getFullYear();
let month = today.getMonth();

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
  return dates;
};

function getCalenderTail() {
  const dates = [];
  const lastDay = new Date(year, month + 1, 0).getDay();
  for (let i = 1; i < 7 - lastDay; i++){
    dates.push({
      date: i,
      isToday: false,
      isDisabled: true,
    });
  };
  return dates;
};

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
  if (year === today.getFullYear() && month === today.getMonth()) {
    dates[todaydate - 1].isToday = true;
  }
  return dates;
};

function clearCalender(){
  const tbody = document.querySelector('tbody');
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  };
};

function renderTitle() {
  const title = document.querySelector('#title');
  title.textContent = `${year}/${String(month + 1).padStart(2, '0')}`;
};

function renderWeeks() {
   // get array of dates
  const dates = [
    ...getCalenderHead(),
    ...getCalenderBody(),
    ...getCalenderTail()
  ];

  const weeks = [];
  const weekCount = dates.length / 7;
  for (let x = 0; x < weekCount; x++){
    weeks.push(dates.splice(0, 7));
  };
  weeks.forEach(week => {
    const tr = document.createElement('tr');

    week.forEach(date => {
      const td = document.createElement('td');
      td.textContent = date.date;
      if (date.isToday){
        td.classList.add('today');
      }
      if (date.isDisabled){
        td.classList.add('disabled');
      }
      tr.appendChild(td);
    });
    const tbody = document.querySelector('tbody');
    tbody.appendChild(tr);
  });
};

function createCalender() {
  clearCalender();
  renderTitle();
  renderWeeks();
};

// click event on <<(prev)
const prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
  month--;
  if(month < 0){
    year--;
    month = 11;
  }
  createCalender()
});

// click event on >>(next)
const next = document.querySelector('#next');
next.addEventListener('click', () => {
  month++;
  if(month > 11){
    year++;
    month = 0;
  }
  createCalender()
});

//click event on Today
document.querySelector('#today').addEventListener('click', () => {
  year = today.getFullYear();
  month = today.getMonth();
  createCalender();
});

createCalender();
