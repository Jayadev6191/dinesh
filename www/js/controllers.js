angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {

  var chat_bot;

  $http.get('../data/questions.json').then(function(data){
    chat_bot = data.data;
    console.log(chat_bot);

    $scope.playlists = [
      { title: 'sales_order 1', id: 1 },
      { title: 'sales_order 2', id: 2 },
      { title: 'sales_order 3', id: 3 },
      { title: 'sales_order 4', id: 4 },
      { title: 'sales_order 5', id: 5 }
    ];



    $('#chat_button').on('click',function(){
      alert("hello");
      $( "#chat_box" ).slideUp( "slow", function() {
        // Animation complete.
        $(this).css('display','block');
      });

    });

    $("#post").on('submit',function(){
        console.log($('#question').val());
        $('#messages').append('<div class="questions"><span>'+$('#question').val()+'</span></div>');
        if(chat_bot[$('#question').val()]!==undefined){
          $('#messages').append('<div class="answers"><span>'+chat_bot[$('#question').val()]+'</span></div>');
        }
        $('#question').val('')
    });


  },function(err){
    console.log(err);
  });

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
