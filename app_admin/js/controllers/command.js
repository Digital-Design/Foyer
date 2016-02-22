'use strict';

angular.module('foyerApp.controllers')

//controller de commande
.controller('commandController',['$scope', '$http', '$window','$document', 'CONFIG', function($scope, $http, $window, $document, CONFIG) {
 //liste des etats des commandes
 $scope.roles = {
    0: 'Supprimée',
    1: 'En cours de validation',
    2: 'Validée',
    3: 'Servie',
  };
  $scope.states = ['1','2'];

  $scope.filterCheckBox = function(item) {
    for (var i = 0; i < $scope.states.length; i++) {
      if($scope.states[i] == item.state)
        return true;
    }
    return false;
  };

  //recuperation des commandes
  $http.get(CONFIG.API_URL+'command/').success(function(data){
    $scope.commands = data;
    $scope.loaded = true;
  });

  //total d'une commande
  $scope.getTotal = function(item, event) {
    var total = 0;
    for(var i = 0; i < $scope.cart.products.length; i++){
        total += item.product.price * item.product.quantity;
    }
    return total;
  };

  //suppression d'une commande
  $scope.delete = function(item, event) {
    $http.put(CONFIG.API_URL+'command/'+item.id_command+'/state/0').success(function(data) {
      item.state = 0;
    }).error(function(data) {
      $scope.alert = data;
      $document.scrollTop(0, 250);
    });
  };

  //confirmation d'une commande
  $scope.confirm = function(item, event) {
    $http.put(CONFIG.API_URL+'command/'+item.id_command+'/state/2').success(function(data) {
      item.state = 2;
    }).error(function(data) {
      $scope.alert = data;
      $document.scrollTop(0, 250);
    });
  };

  //finalisation d'une commande
  $scope.final = function(item, event) {
    $http.put(CONFIG.API_URL+'command/'+item.id_command+'/state/3').success(function(data) {
      item.state = 3;
    }).error(function(data) {
      $scope.alert = data;
      $document.scrollTop(0, 250);
    });
  };
}])

//controller de form commande
.controller('commandFormController', ['$scope', '$http', '$window', '$routeParams', '$document', '$location','CONFIG', function($scope, $http, $window,$routeParams, $document, $location, CONFIG) {
  $scope.command = {};
  $scope.action = 'add';
  $scope.command.state = 1;
  $scope.command.total = 0;
  //recuperation des users
  $http.get(CONFIG.API_URL+'user/').success(function(data){
    $scope.users = data;
  });

  //recuperation des produits
  $http.get(CONFIG.API_URL+'product/').success(function(data){
    $scope.products = data;
  });

  //recuperation de la commande
  if ($routeParams.id_command) {
    $http.get(CONFIG.API_URL+'command/id_command/'+$routeParams.id_command).success(function(data){
      $scope.command = data;
      $scope.action = 'edit';
      $scope.command.date = new Date($scope.command.date);
    });
  }

  //Post du formulaire
  $scope.submitForm = function(item, event) {
   if($scope.command.product !== undefined && $scope.command.product.length != 0){
      //edit
      if($scope.action === 'edit'){
        $http.put(CONFIG.API_URL+'command/'+$scope.command.id_command, $scope.command).success(function(data) {
          $location.path('command');
        }).error(function(data) {
          $scope.alert = data;
          $document.scrollTop(0, 250);
        });
      }
      //ajout
      else{
        $http.post(CONFIG.API_URL+'command/', $scope.command).success(function(data) {
          $location.path('command');
        }).error(function(data) {
          $scope.alert = data;
          $document.scrollTop(0, 250);
        });
      }
   }
   else{
     $scope.alert = " Vous devez ajouter des produits à la commande.";
     $document.scrollTop(0, 250);
   }
  };
  //reinitialisation du form
  $scope.reinitialiser = function(item, event) {
    $scope.command = null;
    $scope.command.total = 0;
  };
  //supression de la commande
  $scope.delete = function(item, event) {
    $http.delete(CONFIG.API_URL+'command/'+$scope.command.id_command).success(function(data) {
      $location.path('command');
    }).error(function(data) {
      $scope.alert = data;
      $document.scrollTop(0, 250);
    });
  };

  //Paramétrage du datepicker
  $scope.datepickerOptions = {
    format: 'yyyy-MM-dd',
    todayBtn: "linked",
    forceParse: true,
    language: 'fr',
    autoclose: true,
  };

  //+ et - de la liste product
  $scope.addProductList = function(items) {
    //fix pour les boutons simples
    if(!angular.isArray(items)) items = [items];
    angular.forEach(items, function(item, key) {
      var exist = true;
      //si vide on init array
      if(!$scope.command.product)
        $scope.command.product = new Array();
      else
        //on regarde si il existe pas deja pour ajouter quantité
        angular.forEach($scope.command.product, function(value, key) {
          if(value.id_product === item.id_product){
            $scope.command.product[key].quantity ++;
            exist = false;
          }
        });

      //sinon on l'ajoute
      if(exist){
        item.quantity = 1;
        $scope.command.product.push(item);
      }
    });
    getTotal()
  };

  $scope.deleteProductList = function(items) {
    //fix pour les boutons simples
    if(!angular.isArray(items)) items = [items];
    angular.forEach(items, function(item, key) {
      //on parcours le tableau pour l'enlever
      angular.forEach($scope.command.product, function(value, key) {
        if(value.id_product === item.id_product){
          //si c'est pas le dernier quantité -1
          if(value.quantity > 1)
            $scope.command.product[key].quantity --;
          //sinon on le supprimer
          else
            delete $scope.command.product[key];
        }
      });
    });
    getTotal()
  };

  function getTotal(){
    $scope.command.total = 0;
    angular.forEach($scope.command.product, function(value, key){ $scope.command.total += value.quantity * value.price; });
  }

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date();
  $scope.maxDate.setDate($scope.maxDate.getDate()+14);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.status = {
    opened: false
  };

}]);
