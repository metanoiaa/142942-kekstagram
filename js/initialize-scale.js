'use strict';

// Изменим масштаб изображения
window.createScale = function (element, stepScale, value) {
  document.addEventListener('click', function () {
    var value = parseInt(fieldValueOfSize.value, 10) - stepScale;
    if (value < minValue) {
      value = minValue;
    }
    fieldValueOfSize.value = value + '%';
    imagePreview.style = 'transform: scale(' + value / 100 + ')';
  });

  document.addEventListener('click', function () {
    var value = parseInt(fieldValueOfSize.value, 10) + stepScale;
    if (value > maxValue) {
      value = maxValue;
    }
    fieldValueOfSize.value = value + '%';
    imagePreview.style = 'transform: scale(' + value / 100 + ')';
  });
};