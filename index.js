/**
 * Expose plugin
 */

module.exports = caption;

/**
 * ImageZoomCaption
 *
 * @param  {ImageZoom} zoom
 * @param  {Object} opts
 */

function caption(template){

  return function(zoom){

    var el = document.createElement('div');
    el.className ='Image-zoom-caption';
    template = template || zoom.thumb.alt;

    // disable plugin if no template is available
    if (!template) return;

    if (typeof template == 'string') el.innerHTML = template;
    else el.appendChild(template);

    // Listen for hide/show
    zoom.on('shown', onShown);
    zoom.on('position updated', updatePositions)
    zoom.on('hiding', onHiding);

    // When image is shown, append template to body
    function onShown() {
      document.body.appendChild(el);
    }

    // update our caption position whenever our
    // enlarged position changes
    function updatePositions(target) {
      var s = el.style;
      s.width = target.w + 'px';
      s.left = target.x + 'px';
      s.top = target.y + target.h + 'px';
    }

    // When image is hidden, remove caption from DOM
    function onHiding() {
      document.body.removeChild(el);
    }

  }

}
