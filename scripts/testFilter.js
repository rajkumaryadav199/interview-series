let data=[
    {id:1, name:'Apple', category:'Fruit', price:1.5},
    {id:1, name:'banana', category:'Fruit', price:1.5},
    {id:1, name:'ginger', category:'Vegitable', price:1.5},
    {id:1, name:'tomato', category:'Vegitable', price:1.5},
    {id:1, name:'egg', category:'meet', price:1.5},
    {id:1, name:'chicken', category:'meet', price:1.5},
];
let res=[];

data.forEach((item)=>{
    console.log(item)
    if(!res[item.category]){
        res[item.category]=[]
    }
    res[item.category].push(item)
})
console.log(res)