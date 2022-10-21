// function displayftch(){
//     console.log(data);
//     let x = document.getElementById("testtbl");
// for (const contrt in data) {
//     // console.log(contrt, data[contrt]);
//     // let y = x.createElement("tr");
//     var size = Object.keys(data).length;
//      for(i=0; i<=size; i++)
//      {
//         // y.innerText=data[i];
//         console.log(data[i]);
//      }
var formData;
var data;
var data;

async function getmethod(){ 
    // handleSubmit();
   try{
    data = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then((data) => data.json()).then((data)=>{dispdata=data;
        console.log(data);
     } );
    // console.log(data);
    console.log("Got Data using fetch");
}catch(error){
        console.log("Error Occurred durirng the Fetching of data", error);
        
    } displayftch();
    // return data;
}

function displayftch() {
    //   { name: "Harry Potter", city: "London" },
    //   { name: "Don Quixote", city: "Madrid" },
    //   { name: "Joan of Arc", city: "Paris" },
    //   { name: "Rosa Park", city: "Alabama" },

    // getmethod();

    let body = document.getElementById("table_cnt");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("body").appendChild(table);

    let r1 = document.createElement("tr"); //header starts here.
    let h1 = document.createElement("th");
    h1.innerHTML = "name";

    let h2 = document.createElement("th");
    h2.innerHTML = "city";

    r1.appendChild(h1);
    r1.appendChild(h2);

    thead.appendChild(r1); //header completes
  
    let mytable = document.getElementById("mytable");
    mytable.appendChild(table);

    dispdata.map((value,index)=>{
      let tr=document.createElement('tr');
      let td=document.createElement('td');
      tr.appendChild(td);
      td.innerText=value.name;

      let td1=document.createElement('td');
      tr.appendChild(td1);
      td1.innerText=value.city;

      tbody.appendChild(tr);
  })
  }

//   function open()
//   {
//     windows.open()
//   }