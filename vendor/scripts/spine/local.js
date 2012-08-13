// Generated by CoffeeScript 1.3.3
(function() {
  var Spine;
  localStorage = localStorage || [];
  Spine = this.Spine || require('spine');

  Spine.Model.Local = {
    extended: function() {
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;
      result = JSON.stringify(this.toJSON());
      return localStorage[this.className] = result;
    },
    loadLocal: function() {
      var result;
      result = localStorage[this.className];
      alert(result);
      return this.refresh(result || [], {
        clear: true
      });
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }

}).call(this);
