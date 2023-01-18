import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// import Player from '@vimeo/player';
// import Throttle from 'lodash.throttle';
// // додаємо імпорт бібліотеки '@vimeo/player'
// // додаємо імпорт бібліотеки 'lodash.throttle'

// const iframeRef = document.querySelector('#vimeo-player');
// // створюємо константу, до якої закріплюємо адресу плеєра, звертаючись до нього через ID

// const player = new Player(iframeRef);
// // створюємо змінну, як указано в документації бібліотеки vimeo/player

// player.on('timeupdate', Throttle(onPlay, 1000));
// // слухач події timeupdate відповідно до документації vimeo та методу .on() + метод Throttle із
// // бібліотеки lodash.throttle, де відповідно до документації вказуємо потрібну callback fn
// // і час затрикми запуску цієї колбек-функції, зазначаємо у мілісекундах
// // ДОКУМЕНТАЦІЯ lodash.throttle ---- jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// function onPlay({ seconds }) {
//   // ми відразу в ключ функції вказуємо об'єкт даних із ключем seconds
//   localStorage.setItem('videoplayer-current-time', seconds);
//   // до локальної пам'яті записуємо значення // localStorage.setItem("ui-theme", "dark");//
//   // відповідно до лекції 16 підпункту "Веб-сховище". Першим виступає ключ "videoplayer-current-time",
//   // а другим його значення, ним є об'єкт із ключем seconds, тобто поточна секунда відігравання плеєра
// }

//==============> SECOND function VARIANT
// function onPlay(data) {
//   //data — це об’єкт, що містить властивості, характерні для цієї події (вказано в документації далі)
//   //   const onPlay = function(data) {
//   // data is an object containing properties specific to that event
//   // };
//   const time = data.seconds;
//   // створюємо константу, якій присвоюємо значення властивості seconds характерної цій події
//   // ч - з об'єкт data
//   localStorage.setItem('videoplayer-current-time', time);
//   // до локальної пам'яті записуємо значення // localStorage.setItem("ui-theme", "dark");//
//   // відповідно до лекції 16 підпункту "Веб-сховище". Першим виступає ключ "videoplayer-current-time",
//   // а другим його значення, ним є константа time, тобто поточна секунда відігравання плеєра
// }
//==============> SECOND function VARIANT

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// // в плеєрі ми записуємо через метод setTime() в CurrentTime, а саме зчитуємо через get
// // записане в setItem у локальному сховищі значення часу програвання плеєра, відповідно
// // вказується той час зупинки попереднього перегляду. Відповідно до лекції про веб-сховище
// // для методу getItem(key) можна позначити лише ключ і він уже передасть раніше йому записане значення:
// // localStorage.setItem("ui-theme", "dark");
// // const theme = localStorage.getItem("ui-theme");
// // console.log(theme); // "dark"
