const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hoursNumber = document.querySelector('.hours'),
  minutesNumber = document.querySelector('.minutes')

function clock() {
  let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30

  sec.style = `transform: rotate(${seconds}deg); transition: 1s linear;`
  min.style = `transform: rotate(${minutes}deg); transition: 1s linear;`
  hour.style = `transform: rotate(${hours}deg); transition: 1s linear;`

  hoursNumber.innerHTML = time.getHours() < 10
    ? '0' + time.getHours()
    : time.getHours()
  minutesNumber.innerHTML = time.getMinutes() < 10
    ? '0' + time.getMinutes()
    : time.getMinutes()

  setTimeout(() => clock(), 1000);
}

clock()

const links = document.querySelectorAll('.tabsItem'),
  tabs = document.querySelectorAll('.tabsContentItem')


links.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()

    links.forEach((link, index) => {
      link.classList.remove('active')
      tabs[index].classList.remove('active')
    })

    changeTab(item, tabs[i])
  })
})

function changeTab(el, el2) {
  el.classList.add('active')
  el2.classList.add('active')
}


const stopWatch = document.querySelector('.stopwatch__btn');
const indicator = document.querySelector('.tabsLink__span');

const seconds = document.querySelector('.stopwatch__seconds');
const minutes = document.querySelector('.stopwatch__minutes');
const hours = document.querySelector('.stopwatch__hours');

let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;
let timer;

updateClasses();

function updateClasses() {
  stopWatch.addEventListener('click', () => {
    if (stopWatch.classList.contains('default')) {
      startStopwatch();
    } else if (stopWatch.classList.contains('started')) {
      stopStopwatch();
    } else if (stopWatch.classList.contains('stopped')) {
      clearStopwatch();
    }
  });
}

function startStopwatch() {
  stopWatch.classList.remove('default');
  stopWatch.classList.add('started');

  stopWatch.innerHTML = 'STOP';

  indicator.classList.add('active');

  timer = setInterval(() => {
    setTimer();
  }, 1000);
}

function stopStopwatch() {
  stopWatch.classList.remove('started');
  stopWatch.classList.add('stopped');

  stopWatch.innerHTML = 'CLEAR';

  indicator.classList.remove('active');
  indicator.classList.add('active_clear');

  clearInterval(timer);
}

function clearStopwatch() {
  stopWatch.classList.remove('stopped');
  stopWatch.classList.add('default');

  stopWatch.innerHTML = 'START';

  indicator.classList.remove('active_clear');

  clearInterval(timer);

  countSeconds = 0;
  countMinutes = 0;
  countHours = 0;

  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
}

function setTimer() {
  countSeconds++;

  if (countSeconds == 60) {
    countSeconds = 0;
    countMinutes++;

    if (countMinutes == 60) {
      countMinutes = 0;
      countHours++;
    }

    hours.innerHTML = countHours < 10 ? '0' + countHours : countHours;
    minutes.innerHTML = countMinutes < 10 ? '0' + countMinutes : countMinutes;
  }

  seconds.innerHTML = countSeconds < 10 ? '0' + countSeconds : countSeconds;
}
