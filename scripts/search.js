async function apiCall(user)
{
    try{
        let response=await fetch(`https://newsapi.org/v2/top-headlines?q=${user}&apiKey=543e62b5bc9443678e343cb09c03e291`)

        let data=await response.json()
        data=data.articles
        console.log("data:", data)
        return data;
    }catch(err){
        console.log("err:",err)
    }
}
// apiCall(user)

const showNews=(data,location)=>{

    data.forEach(({content, description, title, urlToImage})=>
    {
        let mainDiv=document.createElement("div")
        mainDiv.setAttribute("class", "mainDiv")
        let contDiv=document.createElement("div")
        contDiv.setAttribute("class","contDiv")

        let imgDiv=document.createElement("div")
           imgDiv.setAttribute("class","imgDiv")
        let img=document.createElement("img")
           img.src=urlToImage
        let heading=document.createElement("p")
         heading.textContent=content;
        let articl=document.createElement("p")
        articl.textContent=title;
        let des=document.createElement("p")
        des.textContent=description;

        imgDiv.append(img)

        contDiv.append(heading, articl, des)

        mainDiv.append(imgDiv,contDiv)

        location.append(mainDiv)



 
    // window.location.href="search.html"
})



}



export { apiCall,showNews}