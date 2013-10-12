(function () {
  "use strict";
  APP.Views.NoteEditView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.note  = options.note;
    },

    save: function (event) {
      // this keeps the form from submitting
      event.stopPropagation();
      event.preventDefault();

      // update our model with values from the form
      this.note.set({
        first_name: this.$el.find('input[name=first_name]').val(),
        last_name: this.$el.find('input[name=last_name]').val(),
        email_address: this.$el.find('textarea[name=email_address]').val()
      });
      // we would save to the server here with
      // this.note.save();
      // redirect back to the index
      window.location.hash = "notes/index";
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.note.toJSON()));
      this.$el.find('h2').text('Edit User');
      return this;
    }
  });
}());