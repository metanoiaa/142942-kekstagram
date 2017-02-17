'use strict';

window.initializeFilters = (function () {

  // Применим фильтры к изображению
  return function (className, callback) {

    document.addEventListener('change', function (event) {
      var className = event.target.id.replace('upload-', '');
      callback(className);
    });
  };
})();
