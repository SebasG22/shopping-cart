(function (){
    
'use strict';

angular.module("cart")
.component('cartList', {
        templateUrl: './src/views/components/cartList.html',
        controller: 'cartController as cartCtrl',
});

    
})();