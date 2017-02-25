'use strict';

var pictures = [];

var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

var onLoad = function (event) {
  pictures = JSON.parse(event.target.response);

  pictures.forEach(function (picture) {
    console.log(picture);
  });
};

window.load(DATA_URL, onLoad);