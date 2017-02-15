'use strict';

window.controlScale = (function () {
  var fieldValueOfSize = document.querySelector('.upload-resize-controls-value');

  var setValue = function (value) {
    fieldValueOfSize.value = value + '%';
    window.setFilters.imagePreview.style.transform = 'scale(' + value / 100 + ')';
  };

  // Изменим масштаб изображения
  // window.createScale = function (element, step, value) {
  //   setValue(value);

  //   element.addEventListener('click', function (event) {
  //     if (event.target.id === 'button-dec') {
  //       value = value - step;
  //       if (value < 25) {
  //         value = 25;
  //       }

  //       setValue(value);
  //     }
  //   });

  //   element.addEventListener('click', function (event) {
  //     if (event.target.id === 'button-inc') {
  //       value = value + step;
  //       if (value > 100) {
  //         value = 100;
  //       }

  //       setValue(value);
  //     }
  //   });
  // };

  return {
    setValue: setValue,

    createScale: function (element, step, value) {
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
    }
  }
})();

