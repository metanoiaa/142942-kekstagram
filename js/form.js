'use strict';

(function () {
  var formUploadImage = document.querySelector('#upload-select-image');
  var fieldUploadFile = formUploadImage.querySelector('#upload-file');
  var formUploadOverlay = document.querySelector('.upload-overlay');
  var formClose = document.querySelector('.upload-form-cancel');

  var uploadControls = document.querySelector('.upload-resize-controls');

  var ESCAPE_KEY_CODE = 27;

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
  window.initializeFilters(
      document.querySelector('.upload-filter-controls')
    );

  // Изменим масштаб изображения
  window.controlScale.createScale(uploadControls, 25, 100);
})();

