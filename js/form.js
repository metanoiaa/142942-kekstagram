'use strict';

var formUploadImage = document.querySelector('#upload-select-image');
var fieldUploadFile = formUploadImage.querySelector('#upload-file');
var formUploadOverlay = document.querySelector('.upload-overlay');
var formClose = document.querySelector('.upload-form-cancel');

var filters = document.querySelectorAll('[name=upload-filter]');
var imagePreview = document.querySelector('.filter-image-preview');

var buttonDecreaseSize = document.querySelector('.upload-resize-controls-button-dec');
var buttonIncreaseSize = document.querySelector('.upload-resize-controls-button-inc');
var fieldValueOfSize = document.querySelector('.upload-resize-controls-value');

// При изменении значения поля загрузки фотографии,
// показываем форму кадрирования изображения
fieldUploadFile.addEventListener('change', function () {
  formUploadImage.classList.add('invisible');
});

// a форму загрузки скрываем
fieldUploadFile.addEventListener('change', function () {
  formUploadOverlay.classList.remove('invisible');
});

// Закрываем форму кадрирования
formClose.addEventListener('click', function () {
  formUploadImage.classList.remove('invisible');
});

formClose.addEventListener('click', function () {
  formUploadOverlay.classList.add('invisible');
});

// Применим фильтры к изображению
for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('change', function () {
    var className = this.id.replace('upload-', '');

    for (var k = 0; k < imagePreview.classList.length; k++) {
      if (imagePreview.classList[k].startsWith('filter-')) {
        imagePreview.classList.remove(imagePreview.classList[k]);
      }
    }

    imagePreview.classList.add(className);
  });
}

// Изменим масштаб изображения
buttonDecreaseSize.addEventListener('click', function () {
  var value = parseInt(fieldValueOfSize.value, 10) - 25;
  if (value < 25) {
    value = 25;
  }
  fieldValueOfSize.value = value + '%';
  imagePreview.style = 'transform: scale(' + value / 100 + ')';
});

buttonIncreaseSize.addEventListener('click', function () {
  var value = parseInt(fieldValueOfSize.value, 10) + 25;
  if (value > 100) {
    value = 100;
  }
  fieldValueOfSize.value = value + '%';
  imagePreview.style = 'transform: scale(' + value / 100 + ')';
});
