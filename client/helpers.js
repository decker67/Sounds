categories = {
  'drums': {name: 'Drums', path: 'drums'},
  'voices': {name: 'Voices', path: 'voices'},
  'scifi': {name: 'Sci-Fi', path: 'scifi'},
  'guitar': {name: 'Guitar', path: 'guitar'},
  'scratches': {name: 'Scratches', path: 'scratches'},
  'realScratches': {name: 'Real Scratches', path: 'realScratches'}
};

var songPosition;
var intervallHandler;

hideSaveDialog = true;
hideSaveDialogDependency = new Deps.Dependency;

restartPlay = function () {
  songPosition = 0;
  if (intervallHandler) {
    Meteor.clearInterval(intervallHandler);
  }
  intervallHandler = Meteor.setInterval(play, getSong().speed);
}

play = function() {
  var song = getSong();
  if (song.tones && song.tones[songPosition]) {
    var tone = song.tones[songPosition];
    if (tone !== ' ') {
      var s = new buzz.sound('/sounds/' + categories[song.category].path + '/' + tone + '.mp3');
      s.play();
    }
    songPosition++;
  } else {
    songPosition = 0;
  }
}

getSong = function() {
  return Session.get('song');
}

setSong = function(attribute, value) {
  var song = Session.get('song');
  song[attribute] = value;
  Session.set('song', song);
}
