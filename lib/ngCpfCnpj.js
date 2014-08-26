/* global angular, CPF, CNPJ */
(function(window){

  'use strict';

  var module = angular.module('ngCpfCnpj', []);

  if( window.CPF ) {

    module.directive('ngCpf', function() {
      return {

        restrict: 'A',

        require: 'ngModel',

        // link: function(scope, elm, attrs, ctrl) {
        //   scope.$watch(attrs.ngModel, function(newVal, oldVal) {
        //     ctrl.$setValidity( 'cpf', CPF.isValid(newVal) );
        //   });
        // }
        
        link: function(scope, element, attrs, ctrl) {
          element.bind('keyup', function() {
            if (!CPF.isValid(this.value)) {
              // Não funciona com Angular1.3-beta18
              // ctrl.$setValidity('cpf', false)
              ctrl.$error.cpf = true;
              ctrl.$invalid = true;
            } else {
              // Não funciona com Angular1.3-beta18
              // ctrl.$setValidity('cpf', true) 
              ctrl.$error.cpf = false;
              ctrl.$invalid = false;
            }
          });
        }

      };
    });
  }

  if( window.CNPJ ) {

    module.directive('ngCnpj', function() {
      return {

        restrict: 'A',

        require: 'ngModel',

        // link: function(scope, elm, attrs, ctrl) {
        //   scope.$watch(attrs.ngModel, function(newVal, oldVal) {
        //     ctrl.$setValidity( 'cnpj', CNPJ.isValid(newVal) );
        //   });
        // }
        
        link: function(scope, element, attrs, ctrl) {
          element.bind('keyup', function() {
            if (!CNPJ.isValid(this.value)) { 
              ctrl.$error.cnpj = true;
              ctrl.$invalid = true;
            } else {
              ctrl.$error.cnpj = false;
              ctrl.$invalid = false;
            }
          });
        }

      };
    });
  }

})(this);
