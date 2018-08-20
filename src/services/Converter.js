// @flow

class Converter {
  static clickA(e: MouseEvent) {
    return { type: 'click A', payload: e };
  }
  
  static clickB(e: MouseEvent) {
    return { type: 'click B', payload: e };
  }
  
  static mousemove(e: MouseEvent) {
    return { type: 'mousemove', payload: e };
  }
}

export default Converter;