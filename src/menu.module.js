(function (){
    
    'use strict';
    
    angular.module("menu",[])
    .controller("storeMenuController",storeMenuController);
    
    function storeMenuController($window){
        
        var menu = this;
        menu.device ;
        
        menu.class="app-sidebar";
        
        menu.openMenu = function (){
            
        menu.class="app-sidebar active";
    
        }
        
        menu.openItem = function (){
          menu.class="app-sidebar";
        }

        menu.width = $window.innerWidth;

        
        menu.getDevice= function(){
        
        if (screen.width<767) 
           menu.device="Pequeña"; 
        else 
           if (screen.width<1280) 
              menu.device="Mediana";
           else 
              menu.device="Grande"+menu.width;
            
        };
        

    }
    
    })();