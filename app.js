'use strict'

var projects = [];

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

projArray.sort(function(nextObject, currentObject){
  return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
});

projArray.forEach(function(oneOfMyProjects){
  projects.push(new Project(oneOfMyProjects));
});

projects.forEach(function(project){
  $('.projects').append(project.toHtml());
})
