'use strict';

window.setFilters = (function () {
  var imagePreview = document.querySelector('.filter-image-preview');

  // Применим фильтры к изображению
  var initializeFilters = function () {
    document.addEventListener('change', function (event) {
      var className = event.target.id.replace('upload-', '');

      for (var k = 0; k < imagePreview.classList.length; k++) {
        if (imagePreview.classList[k].startsWith('filter-')) {
          imagePreview.classList.remove(imagePreview.classList[k]);
        }
      }

      imagePreview.classList.add(className);
    });
  };

  return {
    initializeFilters: initializeFilters
  }
})();

