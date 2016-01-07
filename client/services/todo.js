app.service('Todo', function($http) {
    return {
        all: function() {
            return $http.get('http://totose.dev:1337/todo');
        },
        create: function(todo_new) {
            return $http.post('http://totose.dev:1337/todo', {name: todo_new});
        },
        remove: function(id) {
            return $http.delete('http://totose.dev:1337/todo/'+id);
        }
    };
});
