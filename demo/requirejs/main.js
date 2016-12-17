require(['bower_components/lantern/index.js'], function(Lantern) {
  var lantern = new Lantern.default(window);
  console.log({
    name:lantern.name,
    size: lantern.usedJSHeapSize
  });
});
