(function(){
    
    'use strict';
    
    angular.module("cart",[])
    .controller("cartController",cartController);
    
    function cartController(cartService,ngDialog){
        
        var car =this;
        
        car.items_Cart = cartService.getCar();

        car.deleteFromCart = function (id){
            
            for (var i = 0 ; i < car.items_Cart.length; i++) {
              if (car.items_Cart[i].id === id) {
                  if(car.items_Cart[i].quantity > 1){
                      car.items_Cart[i].quantity = car.items_Cart[i].quantity-1; 
                      car.items_Cart[i].priceT = car.items_Cart[i].quantity * car.items_Cart[i].price ;
                  }
                  else{
                     cartService.deleteProduct(i);
                  }
                break;
              }
            }
            
            var a =ngDialog.open({
            template: './src/views/modals/productRemovedModal.html'
            });
            
        }
        
        car.getTotalPrice = function (){
            var total = 0;
            angular.forEach(car.items_Cart,function (product){
                total+=product.priceT;
            });
            
            return total;
        }
        
            car.getTotalProducts = function (){
            var total = 0;
            angular.forEach(car.items_Cart,function (product){
                total+=product.quantity;
            });
            
            return total;
        }
        
    }
    
})();