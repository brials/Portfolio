'use strict';
(function(module){

  var projectView = {};

  projectView.wordCount = () => {
    return Project.all
    .map(project => {return project.description.split(' ').length;})
    .reduce((current, next) => {return current + next}, 0);
  }

  projectView.handleNav = () => {
    $('#about_me').hide()
    $('.nav-bar').on('click', '.nav-list', function(e){
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).attr('data-content')).fadeIn();
    })
  }

  projectView.handleNav();
  $('#wordCount').text(projectView.wordCount());
  module.projectView = projectView;

})(window);
