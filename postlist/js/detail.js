async function solveParam(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `<ul>
        <li> Username: ${myJson[i].userId}</li>
        <li> IdPost: ${myJson[i].id}</li>
        <li> Title: ${myJson[i].title}</li>
        <li> Content: ${myJson[i].body}</li>
    </ul>`
  };
  document.getElementById("demo").innerHTML = display;
}

async function solveComment(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `<ul>
        <li> PostId: ${myJson[i].postId}</li>
        <li> Id: ${myJson[i].id}</li>
        <li> Name: ${myJson[i].name}</li>
        <li> Email: ${myJson[i].email}</li>
        <li> Content: ${myJson[i].body}</li>
    </ul>
    <hr>
    `
  };
  document.getElementById("demo").innerHTML = display;
}

async function solveUser(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `<ul>
        <li> Id: ${myJson[i].id}</li>
        <li> Name: ${myJson[i].name}</li>
        <li> Username: ${myJson[i].username}</li>
        <li> Email: ${myJson[i].email}</li>
        <li> Adress:
            <li> Street: ${myJson[i].address.street} </li>
            <li> Suite : ${myJson[i].address.suite} </li>
            <li> City : ${myJson[i].address.city} </li>
            <li> Zipcode : ${myJson[i].address.zipcode} </li>
            <li> Geo : Lat: ${myJson[i].address.lat} + Lgn: ${myJson[i].address.lgn}</li>
        </li>
    </ul>
    <hr>
    `
  };
  document.getElementById("demo").innerHTML = display;
}

async function solveUserIdPost(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `<ul>
        <li> Username: ${myJson[i].userId}</li>
        <li> IdPost: ${myJson[i].id}</li>
        <li> Title: ${myJson[i].title}</li>
        <li> Content: ${myJson[i].body}</li>
    </ul>
    <hr>
    `
    
  };
  document.getElementById("demo1").innerHTML = display;
}

function getParamId(callback){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    let file = `https://jsonplaceholder.typicode.com/posts?id=${myParam}`
    console.log(file);
    if(myParam != null){
    callback(file)
    }
}

function getUserId(callback){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('userId');
    let file = `https://jsonplaceholder.typicode.com/users?id=${myParam}`
    console.log(file);
    if(myParam != null){
        callback(file)
    }
}

function getUserIdPost(callback){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('userId');
    let file = `https://jsonplaceholder.typicode.com/posts?userId=${myParam}`
    console.log(file);
    if(myParam != null){
        callback(file)
    }
}

function getComment(callback){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('postId');
    let file = `https://jsonplaceholder.typicode.com/comments?postId=${myParam}`
    console.log(file);
    if(myParam != null){
        callback(file)
    }
}

getParamId(solveParam);
getUserId(solveUser);
getComment(solveComment);
getUserIdPost(solveUserIdPost)