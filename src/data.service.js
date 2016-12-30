(function (){
    
    'use strict';
    
    angular.module("storeData",[])
    .service("dataService",dataService);
    
    function dataService($http){
        
        var data = this;
        
        data.getJSON = function (url){
            
            return $http({
                method: "GET",
                url: (url)
                })
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log("Something went terribly wrong."+error);
                    });
        }
    }  
})();