/*-------Date-------*/


let a=new Date();
let f=a.getHours();
if(f>=0 && f<13){
  document.write("Morning")
  document.write("<br>")
}
else if(f>=13 && f<=15){
  document.write("Afternoon")
  document.write("<br>")
}
else if(f>=16 && f<=18){
  document.write("Evening")
  document.write("<br>")
}
else if(f>=20 && f<=23){
  document.write("Night")
  document.write("<br>")
}
else{
  document.write("ERROR")
}
