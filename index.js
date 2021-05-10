// Your code here
class Polygon{
  constructor(array){
    this.array = array;
  }


  get countSides(){
    return  this.array.length;
  }
  get perimeter(){
    let sum= 0;
    for(let i=0; i< this.countSides; i++){
      sum += this.array[i];
    }
    return sum;
  }
}
class Triangle extends Polygon{
  get isValid(){
    const firstPairs = this.array[0] + this.array[1];
    const secondPairs = this.array[1] + this.array[2];
    const thirdPairs = this.array[0] + this.array[2]
    if((firstPairs > this.array[2]) && (secondPairs > this.array[0]) && (thirdPairs > this.array[1])){
      return true;
    }
    return false;
  }
}

class Square extends Polygon{
  get isValid(){
    if((this.array[0] === this.array[1]) && (this.array[0] === this.array[2]) && (this.array[0] === this.array[3])){
      return true;
    }
    return false;
  }
  get area(){
    return this.array[0] * this.array[0];
  }
}
