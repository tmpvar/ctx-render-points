var TAU = Math.PI*2;

module.exports = renderPoints;

function renderPoints(ctx, radius, array) {
  var l = array.length;
  for (var i=0; i<l; i++) {
    var point = array[i];
    var p0 = point[0];
    var p1 = point[1];

    ctx.moveTo(p0 + radius, p1);
    ctx.arc(p0, p1, radius, 0, TAU, false);
  }
}
