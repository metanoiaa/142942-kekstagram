'use strict';

// Применим фильтры к изображению
window.initializeFilters = function (element) {
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