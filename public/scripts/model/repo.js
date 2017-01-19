'use strict';

(function(module){

  const projectRepos = {};
  projectRepos.all = [];

  projectRepos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/brials/repos',
      method: 'GET',
      headers: {
        Authorization: githubToken //eslint-disable-line
      }
    }).then(data => {projectRepos.all = data; callback()});
  };

  module.projectRepos = projectRepos;
})(window);
