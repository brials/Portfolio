'use strict';

(function (module){
  const projectRepoView = {};

  projectRepoView.aboutRepo = function(){
    var template = Handlebars.compile($('#repo-template').text()); //eslint-disable-line
    $('#about_me').append(projectRepos.all.map(template)); //eslint-disable-line
  }

  module.projectRepoView = projectRepoView;
})(window);
