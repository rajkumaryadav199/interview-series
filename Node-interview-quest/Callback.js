function fetchData(url, callback){
    let data = fetch(url)
    setTimeout(function(){
        callback(data)
    }, 1000)
}

fetchData('localhoast://3000', function(res){
   try {
    console.log(res);
   } catch (error) {
    throw(error)
   }
})