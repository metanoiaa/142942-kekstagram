'use strict';

window.initializeFilters = (function () {

  // Применим фильтры к изображению
  return function (uploadFilterControls, callback) {

    uploadFilterControls.addEventListener('change', function (event) {
      uploadFilterControls = event.target.id.replace('upload-', '');
      callback(uploadFilterControls);
    });
  };
})();
