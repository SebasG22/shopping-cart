(function (){
    
    'use strict';
    
    angular.module("cart")
    .service("cartService",cartService);
    
    function cartService (){
        
        var cartService = this;
        
        cartService.shoppingCart = [];
        
        cartService.addProduct = function (product){
            cartService.shoppingCart.push(product);
            console.log("product saved")
        }
        
        cartService.deleteProduct = function (index){
            var shoppingCart = cartService.getCar();
            shoppingCart.splice(index, 1);
        }
        
        cartService.getCar = function (){
            return cartService.shoppingCart;
        }
        
    }
    
    
})();