(function() {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'home': '/',
      'detail': '/detail',
      'movement-detail': '/movement/:id/:label',
      'help': '/help'
    }
  });
}());
