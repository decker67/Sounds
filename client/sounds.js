
Session.set('song', {
  tones: '',
  speed: 300,
  category: 'drums'
});


Template.body.helpers({

  'tones': function() {
    return getSong().tones;
  },

  'speed': function() {
    return getSong().speed;
  },

  'selected': function() {
    return getSong().category === this.toString() ? 'selected' : undefined;
  },

  'name': function() {
    return categories[this].name;
  },

  'categoryIds': _.keys(categories),

  'category': function(id) {
    return categories[id];
  }
});

Template.body.events({

  'input #keystrokes': function (event) {
    setSong('tones', event.target.value);
  },
  'input #speed': function (event) {
    setSong('speed', event.target.value);
    restartPlay();
  },

  'change #categories': function (event) {
    setSong('category', event.target.value);
  }
  ,

  'click #saveButton': function() {
    hideSaveDialog = !hideSaveDialog;
    hideSaveDialogDependency.changed();
  }
});

restartPlay();

