app.controller('todoCtrl', function($scope, Todo) {
    Todo.all().success(function(todos) {
        $scope.list_todo = todos;
    })

    $scope.toto_new = '';

    $scope.createTodo = function() {
        Todo.create($scope.toto_new);
        $scope.list_todo.push({name: $scope.toto_new});
        $scope.toto_new = '';
    }

    $scope.removeTodo = function(id, index) {
        Todo.remove(id);
        $scope.list_todo.splice(index, 1)
    }
});
