'use strict';
function runPage(ctx){ //eslint-disable-line
  console.log(ctx.params.endPoint);
  if(ctx.params.endPoint === 'about') {
    controller.initAboutMe //eslint-disable-line
  } else {
    controller.initAboutMe //eslint-disable-line
    console.log(ctx.params.length);
  }
}


page('/:endPoint', controller.initProjects); //eslint-disable-line
page('/about_me', controller.initAboutMe); //eslint-disable-line
page(); //eslint-disable-line
