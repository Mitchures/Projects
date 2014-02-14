(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#board').hide();
    $('#play').click(setBoard /*ranLetters, '.tile'*/);
    $('#reset').click(reset);
  }
  function setBoard(){
    $('#board').show();
    console.log('show');
  }
  
  function reset(){
    $('#board').hide();
  }

})();
