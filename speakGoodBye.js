(function () {
  var byeSpeaker = {};
  var speakerWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakerWord + " " + name);
  };
  window.byeSpeaker =byeSpeaker;
})();
