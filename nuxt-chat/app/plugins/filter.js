import Vue from 'vue'

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
})

Vue.filter("truncate", function(value, length, omission) {
  var length = length ? parseInt(length, 10) : 20;
  var ommision = omission ? omission.toString() : "...";

  if (value.length <= length) {
    return value;
  }

  return value.substring(0, length) + ommision;
});