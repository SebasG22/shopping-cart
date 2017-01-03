(function (){
    
    'use strict';
    
    angular.module("storeApp",['ui.router','storeData','cart','menu','ngDialog','dm.stickyNav'])
    .controller("storeController",storeController);
    
    function storeController($http, $filter,dataService,cartService,ngDialog){
        var store = this;
        
        store.products=[];
        store.categories=[];
        store.filter=false;


        
        store.getData = function () {
            var products = [];
            dataService.getJSON("src/data/data.json").then(function (data){
            console.log(data);
            angular.forEach(data.products,function(item){
               item.price = parseFloat(item.price);
               products.push(item);
               
            });
            store.products=products;
            store.categories=data.categories;
            
        });
            
        }
        
        store.addProduct = function (id){
            
            for (var i = 0 ; i < store.products.length; i++) {
              if (store.products[i].id === id) {
                cartService.addProduct(store.products[i]);
                break;
              }
            }
            
            var a =ngDialog.open({
            template: './src/views/modals/productAddedModal.html'
            });
            

        }
        
        store.items_Cart = cartService.getCar();
        
        store.getFilter = function (){
            if(store.filter){
                store.filter=false;
            }
            else{
                store.filter=true;
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
})();