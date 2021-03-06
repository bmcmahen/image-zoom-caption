(function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
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

}, {}]}, {}, {"1":"ImageZoomCaption"})
