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
    
        /* button  #btnLogin_Login */
    $(document).on("click", "#btnLogin_Login", function(evt)
    {
         activate_page("#ScreenDashboard"); 
    });
    
        /* button  #btn11 */
    $(document).on("click", "#btn11", function(evt)
    {
         activate_page("#ScreenLogin"); 
    });
    
        /* button  #btn22 */
    $(document).on("click", "#btn22", function(evt)
    {
         activate_page("#StudentResult"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
