// Your code here
class Polygon{
  constructor(array){
    this.array = array;
  }
  get countSides(){
    return this.array.length;
  }
  get perimeter(){
    let perimeter = 0;
    for(let i=0; i<this.countSides; i++){
      perimeter += this.array[i];
    }
    return perimeter;
  }
}

class Triangle extends Polygon{
  get isValid(){
    if(this.array[0] + this.array[1] > this.array[2]){
      if(this.array[0] + this.array[2] > this.array[1]){
        if(this.array[1] + this.array[2] > this.array[0]){
          return true;
        }
      }
    }
    return false;
  }
}

class Square extends Polygon{
  get isValid(){
    let previous = this.array[0];
    for(let i=0; i<this.countSides; i++){
      let current = this.array[i];
      if(current !== previous){
        return false;
      }
      previous = current;
    }
    return true;
  }
  get area(){
    return this.array[0] ** 2;
  }
}
