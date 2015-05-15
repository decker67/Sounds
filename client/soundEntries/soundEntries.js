Template.soundEntries.helpers({
  'sounds': function () {
    return sounds.find();
  }
});

Template.soundEntries.events({
  'click .soundEntry': function () {
    setSong('speed', this.speed);
    setSong('tones', this.tones);
    setSong('category', this.category);
    restartPlay();
  }
});
