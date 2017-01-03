(function (){
    
    'use strict';
    
    angular.module("cart")
    .service("cartService",cartService);
    
    function cartService (){
        
        var cartService = this;
        
        cartService.shoppingCart = [];
        
        cartService.addProduct = function (product){

                
            if(cartService.shoppingCart.length > 0 )
            {
                for (var i = 0 ; i < cartService.shoppingCart.length; i++) {
                if(cartService.shoppingCart[i].id == product.id){
                    product["quantity"] = cartService.shoppingCart[i].quantity + 1;
                    product["priceT"] = product ["quantity"] * product ["price"]; 
                    cartService.shoppingCart.splice(i,1);
                }
                else{
                     product["quantity"]=1;
                     product["priceT"]=product["price"];
                }
            }
                
            }
            else{
                product["quantity"]=1;
                product["priceT"]=product["price"];
            }
            
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