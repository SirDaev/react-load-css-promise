export const loadStyleSheet = ( path, fn, scope ) => {
  const head = document.getElementsByTagName( 'head' )[0];
  const link = document.createElement( 'link' );
  link.setAttribute( 'href', path );
  link.setAttribute( 'rel', 'stylesheet' );
  link.setAttribute( 'type', 'text/css' );
  var sheet, cssRules;

  if ( 'sheet' in link ) {
    sheet = 'sheet'; cssRules = 'cssRules';
  } else {
    sheet = 'styleSheet'; cssRules = 'rules';
  }

  const interval_id = setInterval( function() {
    try {
    if ( link[sheet] && link[sheet][cssRules].length ) {
        clearInterval( interval_id );
        clearTimeout( timeout_id );
        fn.call( scope || window, true, link );
    }
    } catch( e ) {} finally {}
  }, 10);

  const timeout_id = setTimeout( function() {
    clearInterval( interval_id );
    clearTimeout( timeout_id );
    head.removeChild( link );
    fn.call( scope || window, false, link );
  }, 2000);

  head.appendChild( link );
}