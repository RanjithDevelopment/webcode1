// creating container//
var sample=document.createElement("div");
sample.style.textAlign="center";

// input tag creation//
var input=document.createElement("input");
input.setAttribute("class","input");
input.setAttribute("id","name");
input.setAttribute("placeholder","michael  matthew  jane");

//buttton creation//
var btn=document.createElement("button");
btn.setAttribute("type","button");
btn.setAttribute("class","btn btn-primary");
//onclick calls the function hackathon//
btn.addEventListener("click",hackathon);
btn.innerHTML="SEARCH";



sample.append(input,btn);
document.body.append(sample);


// async await function
async function hackathon(){
    //the name from user//
var res=document.getElementById("name").value;


if(res==='michael'||res==='matthew'||res==='jane'){
   
    var url=`https://api.nationalize.io/?name=${res}`;
var get=await fetch(url);
var result=await get.json();
//it gives the complete api details//
// console.log(result);
   }


//throw error if any occur//
else{
    alert("This is Not a valid Name");
}
// storing the object value of key country in variable a//  
var a=result.country;
console.log(a);
for (var i = 0; i <a.length-1; i++) {
  
   
    var div=document.createElement("div");
    div.setAttribute("class","final")
    div.style.textAlign="center";
    div.innerHTML=`<div class="card text-white bg-info mb-3" style="width: 18rem; ">
    <div class="card-body">
    <h3>NATIONALITY :</h3><br>
    
    <h5 style="align-center">${a[i].country_id}</h5>
    <hr class="line">
      <h3 class="heading">PORABABILITY:</h3><br>
    
      <h5 class="ptobability"> ${a[i].probability}</h5>
      </div>
  </div>`;
  document.body.append(div);



}



}

