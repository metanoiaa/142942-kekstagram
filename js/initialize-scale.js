'use strict';

window.createScale = (function () {
  var fieldValueOfSize = document.querySelector('.upload-resize-controls-value');
  var imagePreview = document.querySelector('.filter-image-preview');

  var setValue = function (value) {
    fieldValueOfSize.value = value + '%';
    imagePreview.style.transform = 'scale(' + value / 100 + ')';
  };

  return function (element, step, value) {
    setValue(value);

    element.addEventListener('click', function (event) {
      if (event.target.id === 'button-dec') {
        value = value - step;
        if (value < 25) {
          value = 25;
        }

        setValue(value);
      }
    });

    element.addEventListener('click', function (event) {
      if (event.target.id === 'button-inc') {
        value = value + step;
        if (value > 100) {
          value = 100;
        }

        setValue(value);
      }
    });
  };
})();

