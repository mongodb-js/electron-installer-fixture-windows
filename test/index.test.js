var path = require('path');
var fs = require('fs');
var assert = require('assert');

var app = {
  path: require('../')
};

describe('electron-installer-squirrel-windows', function() {
  it('should have a package.json', function(done) {
    var pkg = path.join(app.path, 'resources', 'app', 'package.json');
    fs.exists(pkg, function(exists) {
      assert(exists);
      done();
    });
  });
});
