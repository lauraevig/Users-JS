(function () {
  "use strict";
  APP.Models.NoteModel = Backbone.Model.extend({
    // you can set any defaults you would like here
    defaults: {
      first_name: "",
      last_name: "",
      email_address: ""
    },

    validate: function (attrs) {
      var errors = {};
      if (attrs.first_name === '') {
        errors.first_name = "Hey! Give me your first name!";
      }

      if (attrs.last_name === '') {
        errors.last_name = "Hey! Give me your last name!";
      }

      if (attrs.email_address === '') {
        errors.email_address = "You gotta let me know how to spam you! j/k. Sort of.";
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  APP.Collections.NoteCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: APP.Models.NoteModel
  });
}());
