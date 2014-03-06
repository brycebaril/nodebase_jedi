var levelup = require("levelup")
var leveljs = require("level-js")

var Sublevel = require("level-sublevel")
var Version = require("level-version")

var LevelGraph = require("levelgraph")

var TimestreamDB = require("timestreamdb")

window.level = function (location, options) {
  options = options || {}
  options.db = leveljs
  return levelup(location + "-" + Date.now(), options)
}
window.Sublevel = Sublevel
window.Version = Version
window.LevelGraph = LevelGraph
window.TimestreamDB = TimestreamDB