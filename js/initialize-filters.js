'use strict';

window.initializeFilters = (function () {
  var imagePreview = document.querySelector('.filter-image-preview');

  // Применим фильтры к изображению
  return function (className, callback) {

    document.addEventListener('change', function (event) {
      var className = event.target.id.replace('upload-', '');
      imagePreview.classList.add(className);
    });

    callback(className);
  };
})();

