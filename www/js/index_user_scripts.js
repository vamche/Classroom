(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Login */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         activate_page("#uib_page_1"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
