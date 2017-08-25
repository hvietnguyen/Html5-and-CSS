angular.module('myApp', ['angularCroppie', 'ngCroppie']).controller('MyCtrl', function($scope) {
  
  // $scope.inputImage= 'https://raw.githubusercontent.com/Foliotek/Croppie/master/demo/demo-1.jpg';
  // $scope.onUpdate = function(data){
  //   console.log(data);
  // }

  $scope.cropped = {
    source: 'https://raw.githubusercontent.com/Foliotek/Croppie/master/demo/demo-1.jpg',
    opts:{
        boundary:{width:200,height:200}, 
        viewport:{width:200,height:200, type:'circle'},
        enableOrientation:true,
        // enableExif:true,
    },
    image:'',
  };
  
  var img = $('#image-cropper');

  img.croppie({
    viewport: {
      width: 201,
      height: 201,
      type: 'circle'
    },
    boundary: {
      width: 200,
      height: 200
    },
    enableOrientation:true,
    url:'/images/avtar-hacker-dep-13.jpg',
  });

  $scope.toggleModal=function(){
    //debugger;
    angular.element('#myModal').modal('toggle');
    img.croppie('bind');
  }

  // Assign blob to component when selecting a image
  $('#upload').on('change', function () {
    var input = this;
    
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        // bind new Image to Component
        $scope.$apply(function () {
          $scope.cropped.source = e.target.result;
        });
      }

      reader.readAsDataURL(input.files[0]);
    }
  });
  
});