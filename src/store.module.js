(function (){
    
    'use strict';
    
    angular.module("storeApp",['storeData'])
    .controller("storeController",storeController);
    
    
    function storeController($http,dataService){
        var store = this;
        
        store.products=[];
        store.categories=[];
        store.filter=false;
        
        store.getData = function () {
            
            dataService.getJSON("src/data/data.json").then(function (data){
            console.log(data);    
            store.products=data.products;
            store.categories=data.categories;
            
        });
            
        }
        
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