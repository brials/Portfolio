'use strict';
(function(module){

  var projectView = {};

  projectView.wordCount = () => {
    return Project.all  // eslint-disable-line
    .map(project => {return project.description.split(' ').length;})
    .reduce((current, next) => {return current + next}, 0);
  }

  $('#wordCount').text(projectView.wordCount());
  module.projectView = projectView;

})(window);
