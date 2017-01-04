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
        
        store.addProductToCart = function (id){
            
            for (var i = 0 ; i < store.products.length; i++) {
              if (store.products[i].id === id) {
                cartService.addProduct(store.products[i]);
                break;
              }
            }
            
            ngDialog.open({
            template: './src/views/modals/productAddedModal.html'
            });
            

        }
        
        store.deleteProduct = function (id) {
            for (var i = 0 ; i < store.products.length; i++) {
              if (store.products[i].id === id) {
                  store.products.splice(i,1);
                break;
              }
            }
        }
        
        store.getFilter = function (){
            if(store.filter){
                store.filter=false;
            }
            else{
                store.filter=true;
            }
        }
        
        store.getExternalData = function (url) {
            var products = [];
            dataService.getJSON(url).then(function (data){
            console.log(data);
            if(data==undefined){
                ngDialog.open({
                template: './src/views/modals/jsonGetErrorModal.html'
                });
            }
            else{
                if(data.products!=undefined){
                    angular.forEach(data.products,function(item){
                    item.price = parseFloat(item.price);
                    products.push(item);
               
                });
                
                store.products=products;
                store.categories=data.categories;
                
                }
                
                else{
                     ngDialog.open({
                    template: './src/views/modals/productsGetErrorModal.html'
                    });
                }
                
            }
            
            
        });
            
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
})();