
# Image-zoom-caption

  An [Image-Zoom](http://github.com/bmcmahen/image-zoom) plugin that allows you to show a caption when an image is zoomed.

## Installation

  Install using [Duo](http://github.com/duojs/duo)

```
var caption = require('bmcmahen/image-zoom-caption');
```

  or use the standalone build in `dist` using the global `ImageZoomCaption`.

## Example

```javascript
var Zoom = require('bmcmahen/image-zoom');
var caption = require('bmcmahen/image-zoom-caption');

// by default, caption will use the 'alt' tag if it is available
// Otherwise, it accepts an html string or element to render.
var zoom = new Zoom(thumb).use(caption());

setTimeout(function(){
  zoom.show();
}, 1000);
```

## License

  MIT
