(function(){
    
    'use strict';
    
    angular.module("cart",[])
    .controller("cartController",cartController);
    
    function cartController(cartService){
        
        var car =this;
        
        car.addToCart = function (product){
            cartService.addProduct(product);
        }
        
        car.deleteFromCart = function (product){
            cartService.deleteProduct(product);
        }
        
        car.items_Cart = cartService.getCar();
        
    }
    
})();