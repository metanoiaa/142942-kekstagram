'use strict';

window.createScale = (function () {
  return function (element, step, value, callback) {
    callback(value);

    element.addEventListener('click', function (event) {
      if (event.target.id === 'button-dec') {
        value = value - step;
        if (value < 25) {
          value = 25;
        }

        callback(value);
      }
    });

    element.addEventListener('click', function (event) {
      if (event.target.id === 'button-inc') {
        value = value + step;
        if (value > 100) {
          value = 100;
        }

        callback(value);
      }
    });
  };
})();

