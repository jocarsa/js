function getColor(value) {
  var percentage = value / 500;
  var r = 255 * (1 - percentage);
  var g = 255 * percentage;
  var b = 0;
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

function updateText(texto,numero) {
      var input = texto;
      var n = numero;

      function applyColor(text, n) {
        if (text.length <= n) {
          return '<span style="color: red;">' + text + '</span>';
        } else {
          var coloredText = '<span style="color: green;">' + text.substr(0, n) + '</span>';
          var restOfText = text.substr(n);
          return coloredText + restOfText;
        }
      }

      var coloredText = applyColor(input, n);
      return coloredText;
    }