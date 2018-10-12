/* 
 * jqpi1.js 
 */ 

jQuery.fn.gras = function() { 
    // Code JavaScript 
    this.each(function() { 
        $(this).wrapInner('<strong></strong>'); 
    }); 
    return this; 
};
