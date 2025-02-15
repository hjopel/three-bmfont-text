var loadFont = require('load-bmfont')
var THREE = require("three")
// A utility to load a font, then a texture
module.exports = function (opt, cb) {
  loadFont(opt.font, function (err, font) {
    if (err) throw err

    new THREE.TextureLoader().load(opt.image,function (tex) {
      cb(font, tex)
    })
    // THREE.ImageUtils.loadTexture(opt.image, undefined, function (tex) {
    //   cb(font, tex)
    // })
  })
}
