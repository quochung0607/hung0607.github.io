window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    let file = `https://jsonplaceholder.typicode.com/posts?id=${myParam}`;
    let comments = `https://jsonplaceholder.typicode.com/comments?postId=${myParam}`;
    console.log(file);
    solveParam(file);  
    solveComment(comments);
}

async function solveParam(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `<div class="info">
    <h5>${myJson[i].title}</h5>
<p>
    <a href="user.html?id=${myJson[i].userId}" class="icon-link mr-3"><i class="far fa-user"></i>${myJson[i].userId}</a>
</p>
<p>${myJson[i].body}</p>
</div>`
  };
  document.getElementById("demo").innerHTML = display;
}

async function solveComment(value) {
    let myObject = await fetch(value);
    let myJson = await myObject.json();
    var display = "";
    for(let i=0;i<myJson.length;i++){
    display += `
    <div class="info row">
        <div class="col-4 border-right border-primary">
         <p>PostId: ${myJson[i].postId}</p>
         <p>Id: ${myJson[i].id}</p>
         <p>Name: ${myJson[i].name}</p>
         <p>Email: ${myJson[i].email}</p>
        </div>
        <div class="col-8">
         <p>${myJson[i].body}</p>
        </div>
    </div>  
    <hr>
    `
  };
  document.getElementById("demo1").innerHTML = display;
  document.getElementById("cmt_len").innerHTML = `${myJson.length} <i class="fas fa-comments"></i> COMMENTS`;
}
