(function () {
  var canvas = document.createElement('canvas');
  canvas.id = 'starfield';
  document.body.prepend(canvas);
  var ctx = canvas.getContext('2d');
  var stars = [];
  var W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeStars() {
    var count = Math.floor((W * H) / 9000);
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        s: Math.random() * 0.25 + 0.03,
        a: Math.random() * 0.6 + 0.2
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var st = stars[i];
      st.y += st.s;
      if (st.y > H) st.y = 0;
      ctx.globalAlpha = st.a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function () {
    resize();
    makeStars();
  });

  resize();
  makeStars();
  tick();
})();
