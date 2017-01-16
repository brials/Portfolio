'use strict';
// global variables and constructors
(function ProjectIife(module){ //eslint-disable-line

  var projectView = {};

  function Project(options){
    for(var key in options){
      this[key] = options[key];
    }
  }

  Project.all = [];
  // function and method declerations.

  Project.prototype.toHtml = function(){
    var source = $('#project-template').html();
    var projectRender = Handlebars.compile(source); //eslint-disable-line
    return projectRender(this);
  }

  Project.loadAll = rawData => {
    Project.all = rawData.concat().sort((nextObject, currentObject) => {
      return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
    }).map(project => {
      return new Project(project);
    });
  }

  projectView.wordCount = () => {
    return Project.all.map(project => {
      return project.description.split(' ').length;
    }).reduce((current, next) => {return current + next}, 0);
  }

  Project.initIndex = () => {
    Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
    })
  }

  projectView.handleNav = () => {
    $('#about_me').hide()
    $('.nav-bar').on('click', '.nav-list', function(e){
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).attr('data-content')).fadeIn();
    })
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      var data = JSON.parse(localStorage.getItem('rawData'))
      Project.loadAll(data);
      Project.initIndex();
    } else {
      $.ajax({
        dataType: 'json',
        url: 'projData.json',
        method: 'GET',
        success: function(data, method, xhr){ //eslint-disable-line
          Project.loadAll(data);
          localStorage.setItem('rawData', JSON.stringify(data));
          Project.initIndex();
        }
      })
    }
  }
  //function and method calls.
  projectView.handleNav();
  Project.fetchAll();
  $('#wordCount').text(projectView.wordCount());
  module.projectView = projectView;
  module.Project = Project;
})(window);
