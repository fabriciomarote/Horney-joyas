import dataJson from './data/data.json';

  export const getAllTake3 = () => {
    var rings = getRings().slice(0,3)
    var aritos = getHoops().slice(0,3)
    var collares = getCollares().slice(0,3)
    var dijes = getDijes().slice(0,3)
    var piercings = getPiercings().slice(0,3)
    var pulseras = getPulseras().slice(0,3)
    return [].concat(rings, aritos, collares, dijes, piercings, pulseras);
  };

  export const getRings = () => {
    return dataJson.products.filter(ring => ring.type === "anillo")
  }

  export const getHoops = () => {
    return dataJson.products.filter(hoop => hoop.type === "arito")
  }

  export const getCollares = () => {
    return dataJson.products.filter(anillo => anillo.type === "collar")
  }

  export const getDijes = () => {
    return dataJson.products.filter(dije => dije.type === "dije")
  }

  export const getPiercings = () => {
    return dataJson.products.filter(anillo => anillo.type === "piercing")
  }

  export const getPulseras = () => {
    return dataJson.products.filter(anillo => anillo.type === "pulsera")
  }

  export const getLowestToHighestPrice = (list) => {
    return list.sortBy('price');
  }

  export const getHighestToLowestPrice = (list) => {  
  }

  export const getByName = (list, name) => {
     return list.find( any => any.name === name)
  }
