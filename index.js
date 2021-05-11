// Your code here
class Polygon {
  constructor(array){
    this.array=array;
  }
  get countSides(){
    let counter=0;
    this.array.map((el)=>counter++);
    return counter;
  }
  get perimeter(){
    let sum=0;
    this.array.map((el)=>sum+=el);
    return sum;
  }
}
class Triangle extends Polygon{
  get isValid(){

    if((this.array[0]+this.array[1]>this.array[2])&&(this.array[1]+this.array[2]>this.array[0])&&(this.array[0]+this.array[2]>this.array[1]))
    return true;

    return false;
  }
}
class Square extends Polygon {
  get isValid(){
    let counter=0;
    for(let i=0;i<this.array.length-1;i++){
      if(this.array[i]===this.array[i+1])
      counter++;
    }
    if(counter===3)
    return true;

    return false;
  }
  get area(){
      return this.array[0]*this.array[1];
  }
}
