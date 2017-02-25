'use strict';

var pictures = [];

var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

var onLoad = function (event) {
  pictures = JSON.parse(event.target.response);

  pictures.forEach(function (picture) {
    // console.log(picture);
    var templateElement = document.querySelector('template');
    var elementToClone = templateElement.content.querySelector('a.picture');
    var pictureLikes = document.querySelector('.picture-likes');
    var pictureComments = document.querySelector('.picture-comments');

    var newElement = elementToClone.cloneNode(true);
    var newPictires = document.querySelector('.pictures');

    document.body.appendChild(newElement);
    newElement.addEventListener('click', function() {
      alert('Я');
    });
  });
};

window.load(DATA_URL, onLoad);