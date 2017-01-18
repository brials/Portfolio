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
  }
  module.controller = controller;
})(window);
