'use strict';

function hellooCtrl($scope, $interval, COLORS) {
  alert ("hello")

  $scope.options2 = {
    renderer: 'area',
    height: 250,
    padding: {
      top: 2, left: 0, right: 0, bottom: 0
    },
    interpolation: 'cardinal'
  };

  $scope.series = [{
    color: COLORS.primary,
    data: seriesData[0],
    name: 'intelligent'
    }, {
    color: COLORS.bodyBg,
    data: seriesData[1],
    name: 'Download'
    }];

    $interval(function () {
      $scope.series = null;
      random.removeData(seriesData);
      random.addData(seriesData);

      $scope.series = [{
        data: seriesData[0],
          }, {
        data: seriesData[1],
          }];
    }, 1000);

    var seriesData2 = [[], [], []];
    var random2 = new Rickshaw.Fixtures.RandomData(100);

    for (var v = 0; v < 100; v++) {
      random2.addData(seriesData2);
    }

    $scope.options5 = {
      renderer: 'area',
      height: 133,
      padding: {
        top: 2, left: 0, right: 0, bottom: 0
      },
      interpolation: 'cardinal',
      stroke: false,
      strokeWidth: 1,
      preserve: true,
    };

    $scope.features5 = {

      hover: {
        xFormatter: function (x) {
          return new Date(x * 1000).toString();
        },
        yFormatter: function (y) {
          return Math.round(y);
        }
      }
    };


}



angular
  .module('urbanApp')
  .controller('hellooCtrl', ['$scope', '$interval', 'COLORS', hellooCtrl]);
