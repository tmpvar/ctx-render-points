var center = require('ctx-translate-center');
var poly = require('ctx-render-polyline');
var points = require('./ctx-render-points');

var ctx = document.createElement('canvas').getContext('2d');

document.body.appendChild(ctx.canvas);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

center(ctx);

var polys = [[
  [-50, -50],
  [-50, 50],
  [50, 50],
], [
  [-30, -15],
  [5, 20],
  [-30, 20],
]];
ctx
ctx.beginPath();

  // wound CCW
  poly(ctx, polys[0]);
  ctx.closePath();

  // wound CW
  poly(ctx, polys[1]);
  ctx.closePath();

  ctx.fillStyle = "rgba(63, 95, 244, .5)";
  ctx.fill()
  ctx.strokeStyle = 'rgb(63, 95, 244)';
  ctx.stroke()

ctx.beginPath();
  points(ctx, 3, polys[0]);
  ctx.strokeStyle = "yellow";
  ctx.stroke();

ctx.beginPath();
  points(ctx, 2, polys[1]);
  ctx.fillStyle = "orange"
  ctx.fill();
