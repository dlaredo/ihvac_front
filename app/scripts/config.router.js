'use strict';

angular
  .module('urbanApp')
  .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function () {
        window.scrollTo(0, 0);
      });
      FastClick.attach(document.body);
        },
    ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // For unmatched routes
      $urlRouterProvider.otherwise('/');

      // Application routes
      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'views/common/layout.html',
        })


      .state('app.dashboard', {
        url: '/',
        templateUrl: 'views/dashboard.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                insertBefore: '#load_styles_before',
                files: [
                                'styles/climacons-font.css',
                                'vendor/rickshaw/rickshaw.min.css'
                            ]
                        },
              {
                serie: true,
                files: [
                                'vendor/d3/d3.min.js',
                                'vendor/rickshaw/rickshaw.min.js',
                                'vendor/flot/jquery.flot.js',
                                'vendor/flot/jquery.flot.resize.js',
                                'vendor/flot/jquery.flot.pie.js',
                                'vendor/flot/jquery.flot.categories.js',
                            ]
                        },
              {
                  name: 'angular-flot',
                  files: [
                                'vendor/angular-flot/angular-flot.js'
                            ]
                        }]).then(function () {
              return $ocLazyLoad.load('scripts/controllers/dashboard.js');
            });
                    }]
        },
        data: {
          title: 'Dashboard',
        }
      })


      // Apps routes
      .state('app.apps', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/apps',
        })
  

//add intro link
        .state('app.apps.intro',{
          url: '/intro',
          templateUrl: 'views/app-intro.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                  'styles/climacons-font.css',
                                  'vendor/rickshaw/rickshaw.min.css'
                              ]
                          },
                {
                  serie: true,
                  files: [
                                  'vendor/d3/d3.min.js',
                                  'vendor/rickshaw/rickshaw.min.js',
                                  'vendor/flot/jquery.flot.js',
                                  'vendor/flot/jquery.flot.resize.js',
                                  'vendor/flot/jquery.flot.pie.js',
                                  'vendor/flot/jquery.flot.categories.js',
                              ]
                          },
                {
                    name: 'angular-flot',
                    files: [
                                  'vendor/angular-flot/angular-flot.js'
                              ]
                          }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/dashboard.js');
              });
                      }]
          },
          data: {
            title: 'intro',
          }

        })


//add lab to router
        .state('app.apps.lab',{
            url: '/lab',
            templateUrl: 'views/app-lab.html',
            resolve: {
              deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                  {
                    insertBefore: '#load_styles_before',
                    files: [
                                    'styles/climacons-font.css',
                                    'vendor/rickshaw/rickshaw.min.css'
                                ]
                            },
                  {
                    serie: true,
                    files: [
                                    'vendor/d3/d3.min.js',
                                    'vendor/rickshaw/rickshaw.min.js',
                                    'vendor/flot/jquery.flot.js',
                                    'vendor/flot/jquery.flot.resize.js',
                                    'vendor/flot/jquery.flot.pie.js',
                                    'vendor/flot/jquery.flot.categories.js',
                                ]
                            },
                  {
                      name: 'angular-flot',
                      files: [
                                    'vendor/angular-flot/angular-flot.js'
                                ]
                            }]).then(function () {
                  return $ocLazyLoad.load('scripts/controllers/dashboard.js');
                });
                        }]
            },
            data: {
              title: 'Suns Lab',
            }

          })




        .state('app.apps.intelhvac', {
          url: '/hvac',
          templateUrl: 'views/app-intelhvac.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/flot/jquery.flot.js',
                                'vendor/flot/jquery.flot.resize.js',
                                'vendor/flot/jquery.flot.categories.js',
                                'vendor/flot/jquery.flot.stack.js',
                                'vendor/flot/jquery.flot.time.js',
                                'vendor/flot/jquery.flot.pie.js',
                                'vendor/flot-spline/js/jquery.flot.spline.js',
                                'vendor/flot.orderbars/js/jquery.flot.orderBars.js'
                            ]
                        },
                {
                  name: 'angular-flot',
                  files: [
                                'vendor/angular-flot/angular-flot.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/flot.js');
              });
                    }]
          },
          data: {
            title: 'HVAC Charts',
          }
        })


        }
    ])

  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: false,
      events: false
    });
    }]);
