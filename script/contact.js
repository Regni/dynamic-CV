
    // function createFile() {
    //     var text = document.getElementById('textInput').value;
    //     var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    //     var url = window.URL.createObjectURL(blob);

    //     var a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'downloaded_file.txt';
    //     a.style.display = 'none';
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     window.URL.revokeObjectURL(url);
    // }
    const formContainer = document.querySelector(".form-container")
    createForm()

let map = L.map('map').setView([58.38908347907847, 15.565484313558347], 15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




//Create the form and reset
function createForm(){
  //container
  const form = document.createElement("form")
  
  //create all the element required in the form
  const title = document.createElement("h1")
  title.textContent = "Contact Me"

  const nameInput = document.createElement("INPUT")
  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("id", "name")
  nameInput.setAttribute("placeholder", "Enter your name")
  nameInput.setAttribute("autocomplete", "given-name")

  const emaiInput = document.createElement("INPUT")

  emaiInput.setAttribute("type", "email")
  emaiInput.setAttribute("id", "email")
  emaiInput.setAttribute("placeholder", "Enter a valid email adress")
  emaiInput.setAttribute("autocomplete", "email")

  const messageInput = document.createElement("textarea")

  messageInput.setAttribute("id", "message")
  messageInput.setAttribute("placeholder", "Message")

  const btn = document.createElement("button")
  btn.setAttribute("id", "send")
  btn.textContent = "Send"
  
  //append all elements and add them to the form an container
  form.appendChild(title)
  form.appendChild(nameInput)
  form.appendChild(emaiInput)
  form.appendChild(messageInput)
  form.append(btn)
  formContainer.appendChild(form)
}






const submit = document.getElementById("send")
//for the send button
submit.addEventListener("click", function(evt){
  //Stop reloading page
  evt.preventDefault()
  //get the info from the form
  createJSONinfo()
  
})


//A function that creates json object ready to be send somewhere else to a email or database
function createJSONinfo(){
  //get all the values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  //put it a object
  let info = {
    name : name,
    email: email,
    message: message
  }

    //object to json 
    console.log(JSON.stringify(info))
    //form reset
    formContainer.innerHTML="";
    createForm()
}



