const isWebkit = navigator.userAgent.toLowerCase().match(/webkit\/([\d.]+)/);
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function backTop() {
  function step() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      requestAnimationFrame(step);
      window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
  }

  requestAnimationFrame(step);
}
