// delaying wallaby automatic start
wallaby.delayStart();

requirejs.config({
  baseUrl: '/src',
  deps: wallaby.tests,
  callback: wallaby.start
});
