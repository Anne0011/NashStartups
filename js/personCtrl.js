app.factory('Person', ['$http','API_URL', function ($http, API_URL) {
    function getAll(cb) {
      $http
        .get(`${API_URL}/people.json`)
        .success(cb);
    }

    function create(data, cb) {
      $http
        .post(`${API_URL}/people.json`, data)
        .success(cb);
    }

    function update(id, data, cb) {
      $http
        .put(`${API_URL}/people/${id}.json`, data)
        .success(cb);
    }

    function destroy(id, cb) {
      $http
        .delete(`${API_URL}/people/${id}.json`)
        .success(cb);
    }
  return {getAll:getAll, create:create, update:update, destroy:destroy};
}]);
