let user={
    name:'Rajkumar',
    pan:'AZAI2541Z',
    hasBank:true
}
user.pan='AZAI2541'
console.log(user)
Object.defineProperty(user, 'pan', {writable:false})
user.pan='AZAI2541Y'
console.log(user)