
let arr=[-4,-2,-1,1,3]

function getAllSubsets(array) {
    const subsets = [[]];
    let count=0;
    for (const el of array) { 
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            subsets.push( [...subsets[i], el] );
              }
      
    }
    
    return subsets;
}


function myfun(array)
{
    let flag=true
    getAllSubsets(array).map((val)=>{
        let ans=0
       for(let i=0; i<val.length; i++)
       {
            ans=ans+val[i]
       }
    
       if(ans===0 && val.length>1)
       {
        flag=false
        return val.join(" ")
       }
    
    }
    
    )
    
 if (flag==false)
 {
    return "Not any value exist"
 }
}
console.log(myfun(array))




