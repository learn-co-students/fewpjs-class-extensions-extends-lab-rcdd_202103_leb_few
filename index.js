// Your code here
class Polygon{
  constructor(array) {
      this.array = array;
    }
    get countSides(){
      return this.array.length;
    }
    get perimeter(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.array.reduce(reducer, 0);

    }
}
class Triangle extends Polygon {
  // inherits constructor
  get isValid(){

  return ((this.array[0]+this.array[1]>this.array[2]) &&
    (this.array[0]+this.array[2]>this.array[1])&&
    (this.array[1]+this.array[2]>this.array[0])

)
  }
}

class Square extends Polygon {
  get area(){
    return this.array[0]*this.array[0]
  }
  get isValid(){
  return ((this.array[0]===this.array[1]) &&
    (this.array[1]===this.array[2]) &&
    (this.array[2]===this.array[3])
)
  }
}
