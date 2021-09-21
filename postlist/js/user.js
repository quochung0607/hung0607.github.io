window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    let id_user = `https://jsonplaceholder.typicode.com/users?id=${myParam}`
    let id_userPost = `https://jsonplaceholder.typicode.com/posts?userId=${myParam}`
    console.log(id_user);
    solveUser(id_user)  
    solveUserIdPost(id_userPost)
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
        <ul> Adress:
            <li> Street: ${myJson[i].address.street} </li>
            <li> Suite : ${myJson[i].address.suite} </li>
            <li> City : ${myJson[i].address.city} </li>
            <li> Zipcode : ${myJson[i].address.zipcode} </li>
            <li> Geo : Lat: ${myJson[i].address.lat} + Lgn: ${myJson[i].address.lgn}</li>
        </ul>
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
    display += `
    <div class="info">
        <h5>${myJson[i].title}</h5>
    <p>
        <a href="#" class="icon-link mr-3"><i class="far fa-user"></i>${myJson[i].userId}</a>
        <a href="#" class="icon-link"><i class="fas fa-comments"></i> Comment</a>
    </p>
    <p>${myJson[i].body}</p>
    <a href="detail.html?id=${myJson[i].id}" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
    </div>
    `
  };
  document.getElementById("demo1").innerHTML = display;
}
