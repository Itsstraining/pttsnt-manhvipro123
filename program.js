// Add new functions, variables here

function main(n) {
  let dau = n;
    let res = "";
    if(n <= 1){
        return 0;
    }      
    let point = 1;
    let i = 2;
    while(point != dau){
        // for(let i=2; i<=n ; i++){
               
        //     if(n % i == 0)
        //     {               
        //         arr.push(i);
        //         console.log(arr);
        //         n = n/i;
        //         console.log(n);
        //         res = res*i;
        //         console.log(res);
        //         break;
        //     }       
        // }
        
       
        if(n % i == 0){
            res = res + " " + i;
            point = point * i;
            n = n/i;
            // console.log(res);
            // console.log(point);
            // console.log(n);
        }else{
            i++;
        }
    }  
   return res; 
}
console.log(main(900));
module.exports = main;
