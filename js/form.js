'use strict';

(function () {
  var formUploadImage = document.querySelector('#upload-select-image');
  var fieldUploadFile = formUploadImage.querySelector('#upload-file');
  var formUploadOverlay = document.querySelector('.upload-overlay');
  var formClose = document.querySelector('.upload-form-cancel');

  var uploadControls = document.querySelector('.upload-resize-controls');
  var uploadFilterControls = document.querySelector('.upload-filter-controls')

  var ESCAPE_KEY_CODE = 27;

  var fieldValueOfSize = document.querySelector('.upload-resize-controls-value');
  var imagePreview = document.querySelector('.filter-image-preview');

  var setValue = function (value) {
    fieldValueOfSize.value = value + '%';
    imagePreview.style.transform = 'scale(' + value / 100 + ')';
  };

  var applyFilters = function (className) {
    for (var k = 0; k < imagePreview.classList.length; k++) {
      if (imagePreview.classList[k].startsWith('filter-')) {
        imagePreview.classList.remove(imagePreview.classList[k]);
      }
    }

    imagePreview.classList.add(className);
  };

  var formKeydownHandler = function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      formUploadImage.classList.remove('invisible');
      formUploadOverlay.classList.add('invisible');
    }
  };

  var showFormElement = function () {
    formUploadImage.classList.add('invisible');
    formUploadOverlay.classList.remove('invisible');
    document.addEventListener('keydown', formKeydownHandler);
  };

  var hideFormElement = function () {
    formUploadImage.classList.remove('invisible');
    formUploadOverlay.classList.add('invisible');
    document.removeEventListener('keydown', formKeydownHandler);
  };

  // При изменении значения поля загрузки фотографии,
  // показываем форму кадрирования изображения
  fieldUploadFile.addEventListener('change', function () {
    showFormElement();
  });

  // Закрываем форму кадрирования
  formClose.addEventListener('click', function () {
    hideFormElement();
  });

  // Закрываем форму кадрирования с клавиатуры
  formClose.addEventListener('keydown', function (event) {
    if (window.isActivateEvent(event)) {
      hideFormElement();
    }
  });

  // Применим фильтры к изображению
  window.initializeFilters(uploadFilterControls, applyFilters);

  // Изменим масштаб изображения
  window.createScale(uploadControls, 25, 100, setValue);
})();

