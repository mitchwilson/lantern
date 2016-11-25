require.config({
  baseUrl: '../../dist'
});
require(['lantern'], function(Lantern) {
  var lantern = new Lantern.default();
  console.log({
    name:lantern.name,
    size: lantern.usedJSHeapSize
  });
});
