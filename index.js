class Polygon{
  constructor(arr){
    this.arr =arr;
  }
  get countSides(){
    return this.arr.length;
  }
  get perimeter(){
   return this.arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
}
class Triangle extends Polygon{
  get isValid(){
    return ((this.arr[2] + this.arr[1] > this.arr[0] )? true : false);
  }

}
 class Square extends Polygon{
   get isValid(){
     for(let i=1 ; i<this.arr.length ; i++){
      return ((this.arr[i] === this.arr[0])? true : false)
     }
   }
   get area(){
     return this.arr[0]**2;
   }
 }
