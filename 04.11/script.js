 let inp = document.querySelector("input").value;
 let btn = document.querySelector("button");
 let table  = document.querySelector("table")
 btn.addEventListener("click",(e)=>{
  e.preventDefault()
 let a = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=06d23cd7196d7469dbad69f71affe045
  `)
  console.log(a);
//   .then(response =>{
//    response.json()
//    .then(value =>{
//        data=""

//        data+=`<tr>
//        <th >1</th>
//        <td>${value.weather[0].description}</td>
//        </tr>
//        <tr>
//        <th >2</th>
//        <td>${value.main.temp}</td>
//        </tr>
//        <tr>
//        <th >3</th>
//        <td>${value.wind.speed}</td>
//        </tr>
//      `
//      table.innerHTML = data;
 
 
// })
//   })
})
