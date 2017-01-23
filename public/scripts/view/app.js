'use strict';
// global variables and constructors
(function ProjectIife(module){ //eslint-disable-line


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



  Project.initIndex = () => {
    Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
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
        url: './scripts/model/projData.json',
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
  Project.fetchAll();
  module.Project = Project;
})(window);
