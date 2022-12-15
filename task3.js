function reverseBits(n){
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

function factorial(n){
    let r=1;
       for(let i=1;i<n+1;i++){
           
       console.log(i)
           r*=i;
       }
       console.log(r)
}

function getUniqueWords(n){
    let count=0
    a=a.split(" ")
    for(let i=0;i<a.length;i++)
    {
    c=0;
    for(let j=0;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
        c++
        }
    }
    if(count==1)
    {
        console.log(a[i])
    }else console.log("")
    
    }
}
