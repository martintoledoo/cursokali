// function addElement(){

//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode("Hola kali");
//     newDiv.appendChild(newContent);
//     newDiv.className = "hola"

//     var currentDiv = document.getElementById("test");
//     document.body.insertBefore(newDiv, currentDiv);
// }

// document.body.onload = addElement();

function obtenerUsuarios(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(data => { 
    crearUsuario(data);
  });
}

obtenerUsuarios();

function crearUsuario(usuario){

  var divContainer = document.createElement("div");
  divContainer.className = "grid-container";

  var divHeader = document.createElement("div");
  divHeader.className = "item1 grid-item";
  divHeader.textContent = "Usuarios";
  divContainer.appendChild(divHeader);

  for (let i = 0; i < usuario.length; i++) {
    let name = usuario[i].name;
    let email = usuario[i].email;
    let phone = usuario[i].phone;
    let city = usuario[i].address.city;

    let data = [name,email,phone,city]

    var newUser = document.createElement("div");
    newUser.className = "grid-item";

    var imgContent = document.createElement("img");
    imgContent.src = "https://media.istockphoto.com/vectors/user-icon-vector-sign-and-symbol-isolated-on-white-background-user-vector-id1000902826?b=1&k=20&m=1000902826&s=170667a&w=0&h=FJ-CBmqi-7Pyjz8QUNEDtp0GbtZq4af3diBuBrBUQLM="
    imgContent.className = "img";
    newUser.appendChild(imgContent);

    data.forEach(data => {
      var content = document.createElement("p");
      content.className = "contentUser";
      content.textContent= data;

      newUser.appendChild(content);
    });

    divContainer.appendChild(newUser);
  }

  document.body.appendChild(divContainer);
}
