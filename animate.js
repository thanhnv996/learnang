angular.module('transitions', ['ngAnimate', 'ui.router','xeditable'])

.controller('tCtrl', function ($state, $scope) {
  
  // transitions
  $scope.tabs = ['fade-in', 'slide-in', 'scale'];
  
  // backgrounds
  // var colorList = ['red', 'green', 'blue', 'white', 'gray'],
  //   listLast = colorList.length;
  
  // on button click
  $scope.stateChange = function (tab) {
    $scope.transition = tab;
    // $scope.bg = colorList[(Math.floor(Math.random()*listLast))];
    $state.go(tab);
    
  };
  
})


.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('fade-in', {
    url: '/fade-in',
    templateUrl: 'part.html',
    // data: { transition: 'fade-in'}
    data: { transition: 'scale'}
  })
  .state('slide-in', {
    url: '/slide-in',
    templateUrl: 'part.html',
    // data: { transition:'slide-in'}
    data: { transition: 'scale'}
  })
  .state('scale', {
    url: '/scale',
    templateUrl: 'part.html',
    data: { transition: 'scale'}
  })
  .state('scale.product', {
    url: '/product', // khai báo Url hiển thị
    templateUrl: 'product/product.view.html', //đường dẫn view
    controller: 'PrtController', //// Khai báo 1 controller cho state product,
    data: { transition: 'scale'}
  })
  .state('login',{
    url:'/login',
    templateUrl:'view/login.html',
    controller:'',
    data: { transition: 'scale'}
    // data :{transition:'fade-in'}
  })
  .state('login2',{
    url:'/login2',
    templateUrl:'view/login2.html',
    controller:'',
    data: { transition: 'scale'}
    // data :{transition:'fade-in'}
  });
})


.controller('PrtController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        },
        {
            name: 'Model Taking',
            price: 4000
        }
    ];

    $scope.saveNewItem= function(){
        var newItem  = {name: $scope.name,price:$scope.price};
        $scope.scotches.push(newItem);
    }

    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.scotches.splice(x, 1);
    }

    $scope.saveProduct = function(data, id) {
      alert(id);
      alert(JSON.stringify(data, null, 4));
      console.log(data.toSource());
      //$scope.user not updated yet
      // angular.extend(data, {id: id});
      // return $http.post('/saveUser', data);
    };
});