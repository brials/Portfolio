'use strict'
// global variables and constructors
var projects = [];
var projectView = {};

function Project(options){
  for(var key in options){
    this[key] = options[key];
  }
}

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var projectRender = Handlebars.compile(source);
  var context = projects;
  return projectRender(this);
}

// function and method declerations.
projArray.sort(function(nextObject, currentObject){
  return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
});

projArray.forEach(function(oneOfMyProjects){
  projects.push(new Project(oneOfMyProjects));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
})

projectView.handleNav = function(){
  $('#about_me').hide()
  $('.nav-bar').on('click', '.nav-list', function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  })
}

//function and method calls.
projectView.handleNav();
