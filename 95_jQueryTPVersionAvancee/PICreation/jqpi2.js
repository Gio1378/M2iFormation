/* 
 * jqpi2.js 
 */ 

jQuery.fn.cacherLI = function() { 
    // Code JavaScript 
    this.each(function() { 
        $(this).css("display", "none"); 
    }); 
    return this; 
};
