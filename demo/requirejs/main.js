require(['lantern'], function(Lantern) {
  var lantern = new Lantern.default(window);
  console.log({
    name:lantern.name,
    size: lantern.usedJSHeapSize
  });
});
