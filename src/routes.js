(function (){
    
    'use strict';
    
    angular.module('menu')
    .config(RoutesConfig);
    
    
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: './src/views/welcome.html',
      })
      
      .state('store', {
        url: '/tienda',
        templateUrl: './src/views/store.html',
        controller:"storeController as storeCtrl"
      })
      
      .state('cart', {
        url: '/carroCompras',
        templateUrl: './src/views/cart.html',
        controller:"cartController as cartCtrl"
      })
      
    }
    
    
      
      

    
    
})();