
async function apiCall(url){
    try{
        // let data=document.getElementById("main")
        let response=await fetch(url)

        let data=await response.json()
        data=data.articles
   console.log("data:",data)
        return data;
    }
    catch(err)
    {
        console.log("err:",err)
    }
}

// apiCall()
// function appendData(){

// }
function appendData(data, location){

    data.forEach(({title, urlToImage,url})=>{

        let containt=document.createElement("div")
        containt.setAttribute("class", "containt")
        let imgDiv=document.createElement("div")
        imgDiv.setAttribute("class","imgDiv")

        let img=document.createElement("img")
        img.src=urlToImage

        let heading=document.createElement("p")
        heading.textContent=title
       imgDiv.append(img)
     containt.append(imgDiv,heading)
     location.append(containt)
    // console.log("el:",title)

    const news_data={
        title,urlToImage

    }

    containt.onclick=()=>{
        showNews( news_data)
    }


    })
}

const showNews=(el)=>{
    localStorage.setItem("News_detail",JSON.stringify(el))
    window.location.href="news.html"
}

export {apiCall,appendData}