/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="guid.ts"/>
/// <reference path="person.ts"/>
/// <reference path="entrant.ts"/>
/// <reference path="data-service.ts"/>
/// <reference path="app-controller.ts"/>
/// <reference path="add-controller.ts"/>
/// <reference path="run-controller.ts"/>

module lottery {
  export class App {
    static createModule(angular: ng.IAngularStatic) {
      //kick jeremy
      angular.module('lotteryApp', ['ngRoute'])
          .controller('appCtrl', AppController)
          .controller('addCtrl', AddController)
          .controller('runCtrl', RunController)
          .service('dataService', data.DataService);
    }
  }
}

lottery.App.createModule(angular);