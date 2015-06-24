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
    
    
        /* button  #btn11 */
    
    
        /* button  #btn22 */
    
    
        /* button  #btn22 */
    $(document).on("click", "#btn22", function(evt)
    {
         activate_page("#ScreenResults"); 
    });
    
        /* button  #btn21 */
    $(document).on("click", "#btn21", function(evt)
    {
         activate_page("#ScreenAttendance"); 
    });
    
        /* button  #btnLogin_Login */
    
    
        /* button  #HeaderMenu */
    $(document).on("click", "#HeaderMenu", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#LeftMenu"));  
    });
    
        /* button  #HeaderProfile */
    $(document).on("click", "#HeaderProfile", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#RightMenu"));  
    });
    
        /* button  #btnLogin_Login */
    
    
        /* button  #btn11 */
    
    
        /* button  #btnLogin_Login */
    $(document).on("click", "#btnLogin_Login", function(evt)
    {
         activate_page("#ScreenDashboard"); 
    });
    
        /* button  #btn11 */
    
    
        /* button  #btn12 */
    
    
        /* button  #btn21 */
    $(document).on("click", "#btn21", function(evt)
    {
         activate_page("#ScreenAttendance"); 
    });
    
        /* button  #HeaderMenu */
    $(document).on("click", "#HeaderMenu", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#LeftMenu"));  
    });
    
        /* button  #HeaderProfile */
    $(document).on("click", "#HeaderProfile", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#RightMenu"));  
    });
    
        /* button  #btn33 */
    $(document).on("click", "#btn33", function(evt)
    {
         activate_page("#ScreenHomeworkAdd"); 
    });
    
        /* button  #btn11 */
    $(document).on("click", "#btn11", function(evt)
    {
         activate_page("#ScreenLogin"); 
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
    
        /* button  #btn12 */
    $(document).on("click", "#btn12", function(evt)
    {
         activate_page("#ScreenResults"); 
    });
    
        /* button  #btn23 */
    $(document).on("click", "#btn23", function(evt)
    {
         activate_page("#ScreenHomeworkAdd"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
