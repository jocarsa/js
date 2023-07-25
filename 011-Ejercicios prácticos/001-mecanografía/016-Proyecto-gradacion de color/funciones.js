function getColor(value) {
  var percentage = value / 500;
  var r = 255 * (1 - percentage);
  var g = 255 * percentage;
  var b = 0;
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}