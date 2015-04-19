var test = require('tape');
var points = require('./ctx-render-points');

test('a point', function(t) {
  var calls = 0;
  var ctx = {
    moveTo : function(x, y) {
      t.equal(x, 5);
      t.equal(y, 10);
      calls++;
    },
    arc : function(x, y, r, sa, ea, i) {
      t.equal(x, 0);
      t.equal(y, 10);
      t.equal(r, 5);
      t.equal(sa, 0);
      t.equal(ea, Math.PI*2);
      t.equal(i, false);
      calls++;
    }
  };

  points(ctx, 5, [
    [0, 10]
  ]);

  t.equal(2, calls);
  t.end();
});
