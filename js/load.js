'use strict';

window.load = (function () {
  var pictures = [];

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  var xhr = new XMLHttpRequest();

  xhr.open('GET', DATA_URL);

  xhr.addEventListener('load', function (event) {
    try {
      pictures = JSON.parse(event.target.response);
      document.write(JSON.stringify(pictures));
    } catch(err) {}
  });

  xhr.send();
})();

