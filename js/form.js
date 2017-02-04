'use strict';

var formUploadImage = document.querySelector('#upload-select-image');
var fieldUploadFile = formUploadImage.querySelector('#upload-file');
var formUploadOverlay = document.querySelector('.upload-overlay');
var formClose = document.querySelector('.upload-form-cancel');

var filters = document.querySelectorAll('[name=upload-filter]');
var imagePreview = document.querySelector('.filter-image-preview');
var filterControls = document.querySelector('.upload-filter-controls');

var buttonDecreaseSize = document.querySelector('.upload-resize-controls-button-dec');
var buttonIncreaseSize = document.querySelector('.upload-resize-controls-button-inc');
var fieldValueOfSize = document.querySelector('.upload-resize-controls-value');

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
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

var clickedElement = null;

var clickHandler = function (event) {
  console.log("event");
  if (clickedElement) {
    clickedElement.classList.remove('clicked');
  }

  clickedElement = event.currentTarget;
  clickedElement.classList.add('clicked');
}

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
  if (isActivateEvent(event)) {
    hideFormElement();
  }
});

// Применим фильтры к изображению
for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('change', function (event) {
    var className = event.target.id.replace('upload-', '');

    for (var k = 0; k < imagePreview.classList.length; k++) {
      if (imagePreview.classList[k].startsWith('filter-')) {
        imagePreview.classList.remove(imagePreview.classList[k]);
      }
    }

    imagePreview.classList.add(className);
  });
}

// Перевешиваю обработчик выбора текущего фильтра
// с конкретного фильтра на контейнер всех фильтров
for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', clickHandler, true);
}

filterControls.addEventListener('click', clickHandler, true);
document.body.addEventListener('click', clickHandler, true);

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
