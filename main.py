import bottle
import appcode
appcode.loadData("permitData.csv", 5000)
@bottle.route("/")
def router1():
  return bottle.static_file("project.html",root = '')

@bottle.route('/frontend.js')
def router2():
  return bottle.static_file("frontend.js",root = '')

@bottle.route('/bargraph')
def router3():
  return appcode.bargraph()

@bottle.route('/linegraph')
def router4():
  return appcode.linegraph()
@bottle.route('/scatterplot')
def router5():
  return appcode.scatterplot()

bottle.run(host = '0.0.0.0', port = 8080, debug = True)