const calendar = document.getElementById('calendar');
const monthDisplay = document.getElementById('month');
const yearDisplay = document.getElementById('year');
const calendarBody = document.getElementById('calendar-body');

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

renderCalendar();

function renderCalendar() {
  monthDisplay.textContent = date.toLocaleString('default', { month: 'long' });
  yearDisplay.textContent = date.getFullYear();

  // Clear existing calendar body
  calendarBody.innerHTML = '';

  // Get number of days in current month
  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of the month (0 - Sunday, 6 - Saturday)
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Create calendar body
  for (let i = 0; i <= 5; i++) {
    const week = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      const day = i * 7 + j - firstDay;

      if (day < 0 || day >= numDays) {
        // Empty cell
        cell.textContent = '';
      } else {
        cell.textContent = day + 1;
        if (day === date.getDate() && currentYear === date.getFullYear() && currentMonth === date.getMonth()) {
          cell.classList.add('today');
        }
      }

      week.appendChild(cell);
    }
    calendarBody.appendChild(week);
  }
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  date = new Date(currentYear, currentMonth, 1);
  renderCalendar();
}

function prevMonth() {
  currentMonth--;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear--;
  }
  date = new Date(currentYear, currentMonth, 1);
  renderCalendar();
}
