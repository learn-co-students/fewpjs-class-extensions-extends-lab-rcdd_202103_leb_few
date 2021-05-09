// Your code here
class Polygon {
  constructor (arr) {
    this.sides = arr;
  }

  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((perimeter,side) => perimeter + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid() {
    let s1 = this.sides[0] , s2 = this.sides[1] , s3 = this.sides[2], s4 = this.sides[3];
    return ((s1 === s2) && (s1 === s3) && (s1 === s4));
  }
  get area() {
    return this.sides[0] * this.sides[0];
  }
}
