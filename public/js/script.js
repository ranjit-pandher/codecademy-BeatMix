/* eslint-disable no-param-reassign */
// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

for (let i = 0; i < 16; i += 1) {
  kicks.push(false);
  snares.push(false);
  hiHats.push(false);
  rideCymbals.push(false);
}

function toggleDrum(drumName, index) {
  switch (drumName) {
    case 'kicks':
      if (kicks[index] === false) {
        kicks.splice(index, 1, true);
      } else if (kicks[index] === true) {
        kicks.splice(index, 1, false);
      }
      break;
    case 'snares':
      if (snares[index] === false) {
        snares.splice(index, 1, true);
      } else if (snares[index] === true) {
        snares.splice(index, 1, false);
      }
      break;
    case 'hiHats':
      if (hiHats[index] === false) {
        hiHats.splice(index, 1, true);
      } else if (hiHats[index] === true) {
        hiHats.splice(index, 1, false);
      }
      break;
    case 'rideCymbals':
      if (rideCymbals[index] === false) {
        rideCymbals.splice(index, 1, true);
      } else if (rideCymbals[index] === true) {
        rideCymbals.splice(index, 1, false);
      }
      break;
    default:
      break;
  }
}

function clear(drumName) {
  switch (drumName) {
    case 'kicks':
      for (let i = 0; i < kicks.length; i += 1) {
        kicks[i] = false;
      }
      break;
    case 'snares':
      for (let i = 0; i < snares.length; i += 1) {
        snares[i] = false;
      }
      break;
    case 'hiHats':
      for (let i = 0; i < hiHats.length; i += 1) {
        hiHats[i] = false;
      }
      break;
    case 'rideCymbals':
      for (let i = 0; i < rideCymbals.length; i += 1) {
        rideCymbals[i] = false;
      }
      break;
    default:
      break;
  }
}

function invert(drumName) {
  switch (drumName) {
    case 'kicks':
      for (let i = 0; i < kicks.length; i += 1) {
        if (kicks[i] === false) {
          kicks[i] = true;
        } else if (kicks[i] === true) {
          kicks[i] = false;
        }
      }
      break;
    case 'snares':
      for (let i = 0; i < snares.length; i += 1) {
        if (snares[i] === false) {
          snares[i] = true;
        } else if (snares[i] === true) {
          snares[i] = false;
        }
      }
      break;
    case 'hiHats':
      for (let i = 0; i < hiHats.length; i += 1) {
        if (hiHats[i] === false) {
          hiHats[i] = true;
        } else if (hiHats[i] === true) {
          hiHats[i] = false;
        }
      }
      break;
    case 'rideCymbals':
      for (let i = 0; i < rideCymbals.length; i += 1) {
        if (rideCymbals[i] === false) {
          rideCymbals[i] = true;
        } else if (rideCymbals[i] === true) {
          rideCymbals[i] = false;
        }
      }
      break;
    default:
      break;
  }
}

function getNeighborPads(x, y, size){
  const neighborPads = [];
  if(x < 0 || y < 0 || size < 1 || x >= size || y >= size) {
    return [];
  }

  neighborPads.push([x - 1, y]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x, y + 1]);

  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    })
  });
}