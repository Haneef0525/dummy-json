const parems=new URLSearchParams(window.location.search)
const id=parems.get("id")




async function getsingleproduct(){
 const response = await fetch(`https://dummyjson.com/products/${id}`)
 const data = await response.json();    
 console.log(data);


 document.getElementById("card").innerHTML=`
 <img src="${data.thumbnail}" alt="" >

 <div>${data.images.map((url)=>{
 return ` <img src="${url}" alt="" class=img"" onmouseenter="changeimg('${url}')">`
 }).join("")}</div>

<h1>:${data.title}</h1>
<h3>${data.brand}</h3>
<p>${data.category}</p>
<h4>$${data.price}</h4>
 `
}

getsingleproduct()