(function () {
  "use strict";
  APP.Views.NoteNewView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.note  = options.note;
      this.notes = options.notes;
      this.note.bind('invalid', this.showErrors, this);
    },

    showErrors: function (note, errors) {
      this.$el.find('.error').removeClass('error');
      this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
      // highlight the fields with errors
      _.each(_.keys(errors), _.bind(function (key) {
        this.$el.find('*[name=' + key + ']').parent().addClass('error');
      }, this));
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      // update our model with values from the form
      this.note.set({
        first_name: this.$el.find('input[name=first_name]').val(),
        last_name: this.$el.find('input[name=last_name]').val(),
        email_address: this.$el.find('textarea[name=email_address]').val(),
        // just setting random number for id would set as primary key from server
        id: Math.floor(Math.random() * 100) + 1
      });
      if (this.note.isValid()){
        // add it to the collection
        this.notes.add(this.note);
        // this.note.save();
        // redirect back to the index
        window.location.hash = "notes/index";
      }
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.note.toJSON()));
      this.$el.find('h2').text('Create New User');
      return this;
    }
  });
}());
