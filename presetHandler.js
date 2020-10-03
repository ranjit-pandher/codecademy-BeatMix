/* eslint-disable no-console */
const { request } = require('express');
// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrayIndex, newPresetArray) => {
  switch (requestType) {
    case 'GET':
      if(presets[arrayIndex] === undefined){
        return [404];
      }
      return [200, presets[arrayIndex]];

    case 'PUT': 
      if(presets[arrayIndex] === undefined){
        return [404];
      }
      presets.splice(arrayIndex, 1, newPresetArray);
      return [200, newPresetArray];

    default:
      return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
