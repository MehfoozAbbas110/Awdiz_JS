var array=[15,5,10,16,12,18,4,2];
var target=20;
var sum=0;

for(i=0; i<=array.length-1; i++){
    for(j=i+1; j<array.length; j++){
        sum=array[i] + array[j];
        if(sum==target){
            console.log(array[i], array[j]);
        }
    }
}