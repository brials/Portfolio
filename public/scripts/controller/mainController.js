'use strict';

(function(module){
  const controller = {};

  controller.initProjects = function(){
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  controller.initAboutMe = function(){
    $('.tab-content').hide();
    $('#about_me').fadeIn();
    projectRepos.requestRepos(projectRepoView.aboutRepo); //eslint-disable-line
  }
  module.controller = controller;
})(window);
