Package.describe({
  name: 'eokeefe:fullscreen',
  summary: 'Responsive parallax background images with content centering and overflow',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'jquery',
    'templating'
  ], 'client');

  api.addFiles([
    'lib/src/eokeefe:fullscreen.js',
    'lib/src/eokeefe:fullscreen.css'
  ], 'client');

  api.export([
    'backgroundResize',
    'parallaxPosition',
    'fullscreenFix'
  ],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('eokeefe:fullscreen');
  api.addFiles('lib/tests/eokeefe:fullscreen-tests.js', 'client');
});
