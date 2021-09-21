getJson("https://jsonplaceholder.typicode.com/posts");
async function getJson(file) {
  let myObject = await fetch(file);
  let myJson = await myObject.json();

  var display = "";
  for(let i=0;i<myJson.length;i++){
    display += `
    <div class="info">
        <h5>${myJson[i].title}</h5>
    <p>
        <a href="user.html?id=${myJson[i].userId}" class="icon-link mr-3"><i class="far fa-user"></i>${myJson[i].userId}</a>
        <a href="#" class="icon-link"><i class="fas fa-comments"></i> Comment</a>
    </p>
    <p>${myJson[i].body}</p>
    <a href="detail.html?id=${myJson[i].id}" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
    </div>
    `
  };
  document.getElementById("demo").innerHTML = display;
};

// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "https://jsonplaceholder.typicode.com/posts");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


