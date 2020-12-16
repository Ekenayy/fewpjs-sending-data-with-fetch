// Add your code here
let formData = {
    userName: 'Ekene',
    userEmail: '123@gmail.com'
}

let h1 = document.createElement('h1') 
 document.body.append(h1)


function submitData (object) {
    
    let configObj = {
        method: 'Post',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(object)
      };

    fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
         return response.json();
  })
  .then(function(object) {
      h1.innerText = object.id
    
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); 


}
