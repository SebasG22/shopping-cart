(function(){
    
    'use strict';
    
    angular.module("cart",[])
    .controller("cartController",cartController);
    
    function cartController(cartService,ngDialog){
        
        var car =this;
        
        car.deleteFromCart = function (id){
            
            for (var i = 0 ; i < car.items_Cart.length; i++) {
              if (car.items_Cart[i].id === id) {
                cartService.deleteProduct(i);
                break;
              }
            }
            
            var a =ngDialog.open({
            template: './src/views/modals/productRemovedModal.html'
            });
            
        }
        
        
            
            
        car.items_Cart = cartService.getCar();
        
    }
    
})();