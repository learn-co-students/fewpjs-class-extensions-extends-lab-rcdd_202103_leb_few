class Polygon{
  constructor(array){
    this.array=array;
  }
  
  get countSides(){
  return this.array.length;
  }
  
  get perimeter(){
   return this.array.reduce((a,b)=>a+b,0)
    }

}
class Triangle extends Polygon{
  get isValid(){
    for (const a of this.array)
    if (this.perimeter-a>a){
   return true;
 }
 else{
   return false;
  }
    }
}
class Square extends Polygon{
  get isValid(){
    for(const a of this.array){
    if (this.perimeter/4==a){
      return true
    }
    else{
      return false
    }
  }
}
 get area(){
   for(const a of this.array){
   return a*a
   }
    
 } 
}