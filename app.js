'use strict'

var projArray = [];

function Project(name, img, link, description){
  this.name = name;
  this.img = 'pictures/' + img + '.jpg';
  this.link = link;
  this.description = description;
  projArray.push(this);
}
