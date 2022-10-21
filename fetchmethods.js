var formData;
var data;
var dispdata;
function formobjects(){
    return;
}

function handleSubmit(event){
    // event.preventDefault();
    let formElement = document.getElementById("feedback_form");
    let name = formElement["name"].value;
    let email = formElement["email"].value;
    let password = formElement["password"].value;
    let phoneno = formElement["contact"].value;

    formData = {
                name: name,
                email: email,
                password: password,
                phoneno: phoneno
            }

    // console.log(formData);

    return formData;
}

//this is the get method----------------
function getmethod(){ 
    // handleSubmit();
   try{
    data = fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then((data) => data.json()).then((data)=>{dispdata=data;
        console.log(dispdata);
     } );
    // console.log(data);
    console.log("Got Data using fetch");
}catch(error){
        console.log("Error Occurred durirng the Fetching of data", error);
        
    }
    return dispdata;

}


//this is the post method----------------
function postmethod(){
    handleSubmit();
    
try{
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {method: "POST", body:JSON.stringify(formData),
    // JSON.stringify({ Name: "name", Email: "email", password: "address", phoneno: "phoneno"}), 
    headers: { "Content-type": "application/json; charset=UTF-8"}})
 
    .then(formData => formData.json())
    .then(json => console.log(json));
    console.log("Posted user to backend", formData);
}catch(error){
    console.log("There is error in Posting", error);
}
}


//this is the put method----------------
function putmethod(){
    handleSubmit();
    
    try{
        fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {method: "PUT", body:JSON.stringify(formData), //JSON.stringify
        // ({ Name: "name", Email: "email", password: "address", phoneno: "phoneno"}), 
        headers: { "Content-type": "application/json; charset=UTF-8"}})
     
        .then(formData => formData.json())
        .then(json => console.log(json));
        console.log("Updating Successful", formData);
    }catch(error){
        console.log("There is error in Putting", error);
    }
}


//this is the delete method----------------
function deletemethod(){
    handleSubmit();
    console.log("Data Deleted");

    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})

// THE CODE BELOW IS OPTIONAL BUT YOU CAN USE IT IF YOU WANT TO PERFORM RESPONSE HANDELING...

// .then(res => {
//     if (res.ok) { console.log("HTTP request successful") }
//     else { console.log("HTTP request unsuccessful") }
//     return res
// })
// .then(res => res.json())
// .then(formData => console.log(formData))
// .catch(error => console.log(error))
}




// TO DISPLAY THE FETCHED DATA-------------------------------------

    
    // let data = Object.keys(dispdata[0]);

    // function generateTableHead(val , data){
    //     tabll = document.getElementById("testtbl");
    //     let thead = tabll.createElement('th');
    //     let row = thead.createElement('tr');

    //     for (let key of data) {
    //         let th = document.createElement("th");
    //         let text = document.createTextNode(key);
    //         th.appendChild(text);
    //         row.appendChild(th);
    //       }
          
    // }
    
    // generateTableHead(tabll, data);

//     let body = document.getElementById("displayeddata");

// //     for (const cnter in dispdata){
// //         dispdata.map((val,ind)=>{
// //             body.innerHTML=val.name;
// //          //    body.appendChild(p);
// //              })
// //     }

// data.map((dispdata,ind)=>{
//     let p =  document.createElement("td");
//     p.innerText=dispdata.name;
//     p.innerText=dispdata.name;
//     body.appendChild(p);
//      })

//      if (dispdata.length > 0) {

//         var temp = "";
//         dispdata.forEach((itemData) => {
//           temp += "<tr>";
//           temp += "<td>" + itemData.name + "</td>";
//           temp += "<td>" + itemData.city + "</td></tr>";
//         });
//         document.getElementById("displayeddata").innerHTML = temp;
    //   }
