let alldata=[]

async function fetchdata() {
 const response = await fetch("https://dummyjson.com/products");
 const data = await response.json();    
alldata=data.products
 console.log(alldata);

 display(alldata)

}


async function display(data) {
   let str = ``;

 data.map((val) => {
str +=`
<a href="./details.html?id=${val.id}">
<div class="card">
<img src="${val.thumbnail}">
<h1>${val.title}</h1>
<p>${val.brand}</p>
<p>${val.category}</p>
<p>$:${val.price}</p>
</div>
</a>
`;
 }
 );
 document.getElementById("main").innerHTML = str;
}




function searchdata(){
  const input = document.getElementById("input").value;

  let filterdata = alldata.filter((val) =>
   ( val.title.toLowercase().includes(input.toLowercase()))
);
display(filterdata);
}
fetchdata();


