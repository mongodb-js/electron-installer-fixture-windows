# electron-installer-fixture-windows [![][appveyor_img]][appveyor_url]

> A fixture [Electron][electron] app for testing tooling on Windows.

## Installation

```
npm install --save-dev electron-installer-fixture-windows
```

## Usage

```javascript
var path = require('path');
var fs = require('fs');
var assert = require('assert');

var app = {
  path: require('electron-installer-fixture-windows')
};

describe('electron-installer-squirrel-windows', function(){
  it('should have a package.json', function(done){
    var pkg = path.join(app.path, 'resources', 'app', 'package.json');
    fs.exists(pkg, function(exists){
      assert(exists);
      done();
    });
  });
});
```

## License

Apache 2.0

[electron]: https://github.com/atom/electron
[appveyor_img]: https://ci.appveyor.com/api/projects/status/157smy0vsosp72bu/branch/master?svg=true
[appveyor_url]: https://ci.appveyor.com/project/mongodb-js/electron-installer-fixture-windows/branch/master
