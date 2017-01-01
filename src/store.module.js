(function (){
    
    'use strict';
    
    angular.module("storeApp",['ui.router','storeData','cart','menu'])
    .controller("storeController",storeController)
    .filter("names",names)
    .filter("priceMin",filterMinPriceProducts)
    .filter("priceMax",filterMaxPriceProducts)
    .filter("category",filterCategories)
    .filter("available",filterAvailableProducts)
    .filter("bestSeller",filterBestSellerProducts);
    
    function storeController($http, $filter,dataService,cartService){
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
            

        }
        
        store.items_Cart = cartService.getCar();
        
       // store.minPrice = parseFloat(store.minPriceCurrency);
        
        
        

        store.getFilter = function (){
            if(store.filter){
                store.filter=false;
            }
            else{
                store.filter=true;
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function names(){
      return function (input,min) {
          input = input || "";
          var inputFiltered = [];
          
          if(min!=undefined){
          
          angular.forEach(input,function(item){
              

              if(item.price >= min)
              inputFiltered.push(item);
              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }
  
  function filterMinPriceProducts(){
      return function (input,minPrice) {
          input = input || "";
          var inputFiltered = [];

          if(minPrice!=undefined && minPrice!=""){
              

              angular.forEach(input,function(item) {
                  

                  if(item.price>=minPrice){
                     inputFiltered.push(item);
                 } 
                 
              })
              
          return inputFiltered;
              
          }
          else{
          
          return input;
          
          }
              
      }
  }
  
  function filterMaxPriceProducts(){
      return function (input,maxPrice) {
          input = input || "";
          var inputFiltered = [];
          
          if(maxPrice!=undefined && maxPrice!=false){
              
              angular.forEach(input,function(item) {
                  
                  if(item.price <= maxPrice){
                     inputFiltered.push(item);
                 } 
                 
              })
              
          return inputFiltered;
              
          }
          else{
          
          return input;
          
          }
              
      }
  }
  
  function filterCategories(){
      return function (input,category) {
          input = input || "";
          var inputFiltered = [];
          
          if(category!=undefined){
          
          angular.forEach(input,function(item){
              angular.forEach(item.categories,function(itemCategory) {
                 
                 if(itemCategory==category){
                     inputFiltered.push(item);
                 } 
              });
              
              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }
  
  function filterAvailableProducts(){
      return function (input,available) {
          input = input || "";
          var inputFiltered = [];
          
          if(available!=undefined){
          
          angular.forEach(input,function(item){
              
                 if(item.available==available){
                     inputFiltered.push(item);
                 } 
              
              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }
  
  function filterBestSellerProducts(){
      return function (input,bestSeller) {
          input = input || "";
          var inputFiltered = [];
          
          if(bestSeller!=undefined){
          
          angular.forEach(input,function(item){
              
                 if(item.best_seller==bestSeller){
                     inputFiltered.push(item);
                 } 
              
              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }
})();