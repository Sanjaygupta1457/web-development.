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
