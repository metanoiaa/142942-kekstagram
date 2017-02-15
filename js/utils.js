'use strict';

window.isActivateEvent = (function () {
  var ENTER_KEY_CODE = 13;

  return function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };
})();
