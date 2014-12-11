Modernizr.load([
  {
    load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js',
    complete: function () {
      if ( !window.jQuery ) {
        Modernizr.load('js/libs/jquery-1.10.1.min.js');
      }
    }
  },
  {
    load: 'js/navigation.js'
  }
]);