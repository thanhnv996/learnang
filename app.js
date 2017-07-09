var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/'); //Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.view.html',
            data: { transition: 'fade-in'}
        })

        .state('home.product', { // Định ngĩa 1 state product
            url: '/product', // khai báo Url hiển thị
            templateUrl: 'product/product.view.html', //đường dẫn view
            controller: 'PrtController', //// Khai báo 1 controller cho state product,
            data: { transition: 'fade-in'}
        })

        

        .state('about', {
            url: '/about',
            templateUrl: 'about/about.view.html',
            data: { transition: 'fade-in'}
        })

});

routerApp.controller('PrtController', function($scope) {

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
        }
    ];

});