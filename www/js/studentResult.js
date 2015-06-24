function StudentResultCnt($scope)
            {
                //An JSON array to hold the student list.
                $scope.students = [ {subjectCode: 'sub0',subject : 'Science' ,grade : 'A+' },
                                   {subjectCode: 'sub01',subject : 'Math' ,grade : 'B'},
                                   {subjectCode: 'sub02',subject : 'English' ,grade : 'B+'},
                                   {subjectCode: 'sub02',subject : 'English' ,grade : 'B+'},
                                   {subjectCode: 'sub02',subject : 'English' ,grade : 'B+'},
                                   {subjectCode: 'sub02',subject : 'English' ,grade : 'B+'}];
                 
            } 

function MyCtrl($scope) {
    $scope.groups = [];
    $scope.homework = "";

    $scope.groups = [{  name: "Select Class", items: ["X","IX","IIX"], selectedItem : "" },
                     {  name: "Select Subject", items: ["Maths","Science","English"],                                   selectedItem : "" }];
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.selectItem = function(group,item) {
    $scope.shownGroup.selectedItem = item;
    $scope.toggleGroup(group);
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
   $scope.resetHomework = function(){
    for(var i=0;i<$scope.groups.length;i++){
      $scope.groups[i].selectedItem = "";
    }
    $scope.homework = "";
    $scope.shownGroup = null;
  };
  
});