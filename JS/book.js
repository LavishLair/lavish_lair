// var Name = document.getElementById("Name").value;
// var email = document.getElementById("email").value;
// var message = document.getElementById("message").value;

// var formData = {
//     "Name": Name,
//     "email": email,
//     "message": message
//   };

//   localStorage.setItem("formData", JSON.stringify(formData));

//   var storedData = localStorage.getItem("formData");

//   var parsedData = JSON.parse(storedData);
// document.getElementById("nameDisplay").innerHTML = parsedData.name;
// document.getElementById("emailDisplay").innerHTML = parsedData.email;
// document.getElementById("messageDisplay").innerHTML = parsedData.message;

// function storeAndDisplayFormData() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
  
//     var formData = {
//       "name": name,
//       "email": email,
//       "message": message
//     };
  
//     localStorage.setItem("formData", JSON.stringify(formData));
  
//     var storedData = localStorage.getItem("formData");
//     var parsedData = JSON.parse(storedData);
  
//     document.getElementById("nameDisplay").innerHTML = parsedData.name;
//     document.getElementById("emailDisplay").innerHTML = parsedData.email;
//     document.getElementById("messageDisplay").innerHTML = parsedData.message;
//   }
  
  
  
// window.onload = function() {

//     // Check for LocalStorage support.
//     if (localStorage) {
  
//       // Add an event listener for form submissions
//       document.getElementById('contactForm').addEventListener('submit', function() {
//         // Get the value of the name field.
//         var name = document.getElementById('name').value;
  
//         // Save the name in localStorage.
//         localStorage.setItem('name', name);
//       });
  
//     }
  
//   }

//   function persistInput(input)
// {
//   var key = "input-" + input.id;

//   var storedValue = localStorage.getItem(key);

//   if (storedValue)
//       input.value = storedValue;

//   input.addEventListener('input', function ()
//   {
//       localStorage.setItem(key, input.value);
//   });
// }

// var inputElement = document.getElementById("name");

// persistInput(inputElement);


// var username = $('#username').val();
// var password = $('#password').val();
// localStorage.setItem("username", username);
// localStorage.setItem("password", password);







