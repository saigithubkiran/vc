1. function sai() {
    console.log(sai);
}
sai()//output:sai

2. function sum(3,4){
    let result;
    result=a+b;
    console.log(result);
}
sum(3,4)//output:7

3.function sub(7,4){
    let result;
    result = a-b;
    console.log(sub(7,4));//output:3
}
4. var x = 21;
var girl = function(){
    console.log(x);
    var x = 20;
}
girl();//result: undefined
//------------//
5. var x=21;
   girl();
   console.log(x)
   function girl(){
    console.log(x);
    var x=20;
 }//result: undefined
 //-------//
 6. var x2=21;
 a();
 b();
 console.log(a);
7. a = function(){ 
    x2 = 20;
    console.log(x2);
};
b = function() {
    x2 = 40;
    console.log(x2);
}; //result : reference error
//--------------//
8. var p-1
  function fact(n)
  {
    if(n==0)
    console.log("1")
    else{
        for(let i=1;i<=n;i++)
        {
            p=p*i;
        }
        console.log(p)
    }
  }
   fact(5);//result :120
