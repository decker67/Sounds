Template.soundEntries.helpers({
  'sounds': function () {
    return sounds.find();
  }
});

Template.soundEntries.events({
  'click .soundEntry': function () {
    setSong('speed', this.speed);
    setSong('tones', this.value);
    setSong('category', this.library);
    songPosition = 0;
    restartPlay();
  }
});
