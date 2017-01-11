'use strict'
// global variables and constructors
var projectView = {};

function Project(options){
  for(var key in options){
    this[key] = options[key];
  }
}

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var projectRender = Handlebars.compile(source); //eslint-disable-line
  return projectRender(this);
}

Project.all = [];
// function and method declerations.
Project.loadAll = function(rawData){
  rawData.sort(function(nextObject, currentObject){
    return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
  });

  rawData.forEach(function(oneOfMyProjects){
    Project.all.push(new Project(oneOfMyProjects));
    console.log(Project.all);
  });
}
Project.initIndex = function(){
  Project.all.forEach(function(project){
    $('#projects').append(project.toHtml());
  })
}
projectView.handleNav = function(){
  $('#about_me').hide()
  $('.nav-bar').on('click', '.nav-list', function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    // When rawData is already in localStorage,
    // we can load it with the .loadAll function above,
    // and then render the index page (using the proper method on the articleView object).
    var data = JSON.parse(localStorage.getItem('rawData'))
    Project.loadAll(data); //TODO: What do we pass in to loadAll()?
    //TODO: What method do we call to render the index page?
    Project.initIndex();
  } else {
    // TODO: When we don't already have the rawData,
    // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
    // cache it in localStorage so we can skip the server call next time,
    // then load all the data into Article.all with the .loadAll function above,
    // and then render the index page.
    $.ajax({
      dataType: 'json',
      url: 'projData.json',
      method: 'GET',
      success: function(data, method, xhr){ //eslint-disable-line
        console.log(data);
        Project.loadAll(data);
        localStorage.setItem('rawData', JSON.stringify(data));
        console.log('this happened')
        Project.initIndex();
      }
    })
    console.log('happens');
  }
}

//function and method calls.
projectView.handleNav();
Project.fetchAll();
