'use strict'
// global variables and constructors
var projects = [];
var projectView = {};

function Project(options){
  this.name = options.name;
  this.img = 'pictures/' + options.name + '.jpg';
  this.link = options.link;
  this.description = options.description;
  this.datePublished = options.datePublished;
}

Project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.find('h1').text(this.name);
  $newProject.find('p').text(this.description);
  $newProject.find('img').attr('href', this.img);
  $newProject.removeClass('template').addClass('appended')
  return $newProject;
}

// function and method declerations.
projArray.sort(function(nextObject, currentObject){
  return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
});

projArray.forEach(function(oneOfMyProjects){
  projects.push(new Project(oneOfMyProjects));
});

projects.forEach(function(project){
  $('.projects').append(project.toHtml());
})

projectView.handleNav = function(){
  $('.nav-bar').on('click', function(e){
    e.preventDefault();
    console.log(event.target);
    var $temp = $(this).attr('id');
    console.log($temp);
    if($temp === '#projectNav'){
      $('.about_me').hide();
      $('.projects').fadeIn();
    }
    if($temp === '#about_meNav'){
      $('.projects').hide();
      $('.about_me').fadeIn();
    }
  })
}

//function and method calls.
projectView.handleNav();
