//finding maximum value in an array.
var arr=[5,4,3,2,1,8];
var max=arr[0];
for(var i=0; i<arr.length;i++)
{
  if(max>arr[i]){
    max=arr[i];
  }
}
console.log(max);

//find minimum value in an array
var arr=[5,4,3,2,1,8];
var min=arr[0];
for(var i=0; i<arr.length;i++)
{
  if(min<arr[i]){
    min=arr[i];
  }
}
console.log(min);

var str={"apple","banana","grapes"}; // string initialize.

//adding string 
str.unshift("pineapple");

