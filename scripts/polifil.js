let arr=[1, 2, 3];

Array.prototype.Mymap=function(callback){
    let myarr=[];
    for(let i=0; i<this.length; i++){
        myarr.push(callback(this.i, this[i], this))
    }

    return myarr
}

Array.prototype.MyEach=function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

Array.prototype.Myfilter=function(callback){
    let myarr=[];
    for(let i=0; i<this.length; i++){
        if(callback(this[i])){
            myarr.push(callback(this[i], i, this))
        }
    }
    return myarr;
}
Array.prototype.MyReducer=function(callback, initail){
    let acc=initail || 0;
    for(let i=0; i<this.length; i++){
        acc = acc + callback(acc, this[i], i, this)
    }
    return acc;
}