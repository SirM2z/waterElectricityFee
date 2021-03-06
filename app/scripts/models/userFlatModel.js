/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
  'use strict';

  App.Models.UserFlatModel = Backbone.Model.extend({

    url: App.URL.USERFLAT,

    initialize: function() {
    },

    defaults: {
      StudentIdentity: '',
      RoomId: '',
      FlatId: '',
      FlatName:'',
      AreaId:'',
      AreaName:'',
      UserName: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
