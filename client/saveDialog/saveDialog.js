Template.saveDialog.helpers({
  'hide': function () {
    hideSaveDialogDependency.depend();
    return hideSaveDialog ? 'hide' : 'show'
  }
});

Template.saveDialog.events({
  'click .saveButton': function() {
    var song = getSong();
    sounds.insert({
      name: this.name,
      tones: song.tones,
      category: song.category,
      speed: song.speed,
      x: 300,
      y: 300
    });
  }
});
