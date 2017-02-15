'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;

  var isActivateEvent = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };

  return {
    isActivateEvent: isActivateEvent
  }
})();
