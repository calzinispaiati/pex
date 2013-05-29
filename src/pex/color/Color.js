// Generated by CoffeeScript 1.6.2
define(function(require) {
  var Color;

  Color = (function() {
    Color.prototype.r = 0;

    Color.prototype.g = 0;

    Color.prototype.b = 0;

    Color.prototype.a = 0;

    function Color(r, g, b, a) {
      this.r = r != null ? r : 0;
      this.g = g != null ? g : 0;
      this.b = b != null ? b : 0;
      this.a = a != null ? a : 0;
    }

    Color.create = function(r, g, b, a) {
      return new Color(r, g, b, a);
    };

    Color.prototype.set = function(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      if (a == null) {
        this.a = 1;
      }
      return this;
    };

    Color.prototype.copy = function(c) {
      this.r = c.r;
      this.g = c.g;
      this.b = c.b;
      return this.a = c.a;
    };

    return Color;

  })();
  Color.Transparent = new Color(0, 0, 0, 0);
  Color.None = new Color(0, 0, 0, 0);
  Color.Black = new Color(0, 0, 0, 1);
  Color.White = new Color(1, 1, 1, 1);
  Color.Grey = new Color(0.5, 0.5, 0.5, 1);
  Color.Red = new Color(1, 0, 0, 1);
  Color.Green = new Color(0, 1, 0, 1);
  Color.Blue = new Color(0, 0, 1, 1);
  Color.Yellow = new Color(1, 1, 0, 1);
  Color.Pink = new Color(1, 0, 1, 1);
  Color.Cyan = new Color(0, 1, 1, 1);
  Color.Orange = new Color(1, 0.5, 0, 1);
  return Color;
});