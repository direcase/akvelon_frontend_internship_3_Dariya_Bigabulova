function bitsInInt(n){
    let r="";
    let result=0;
    
       while(n!=0){
           let a=n%2;
           r+=a;
           n=Math.floor(n/2);
       }
       
    let pow=r.length-1;
       for(let i=0;i<r.length;i++){
           let res = r[i]*(Math.pow(2,pow));
           result+=res;
           pow--
       }
       
   console.log(r);
   console.log(result);
}