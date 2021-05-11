// Your code here
class Polygon{
  constructor(myArray){
    this.myArray = myArray;
  }
  get countSides(){
    return this.myArray.length;
  }
  get perimeter() {
   return this.myArray.reduce((perimeter,side) => perimeter + side);
 }
}

class Triangle extends Polygon {
  get isValid(){
    if((this.myArray[0] + this.myArray[1]) > this.myArray[2] && (this.myArray[1] + this.myArray[2]) > this.myArray[0] && (this.myArray[2] + this.myArray[0]) > this.myArray[1]) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid(){
    if(this.myArray[0]===this.myArray[1] && this.myArray[1]===this.myArray[2] && this.myArray[2]===this.myArray[3]) {
      return true;
    }else{
      return false;
    }
  }
  get area(){
    return this.myArray[0]**2;
  }
}
