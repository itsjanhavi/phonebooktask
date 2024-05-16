// CRUD - create,Read ,Update,Delete
// [[name,phone,email]],[name,phone,email]

let name = document.getElementById("name");
let phone = document.getElementById("name");
let email = document.getElementById("name");
let addButton = document.getElementById("add");

let phoneBook = [];
console.log(phoneBook,"phoneBook");
addButton.addEventListener("click",()=>{
    
    let contact = {
        personName:name.value,
        personPhone:phone.value,
        personEmail:email.value
       }
       phoneBook.push(contact);
       console.log(phoneBook,"phonebook");
       showDetils();
       name.value="";
       phone.value="";
       email.value="";
})

function showDetils(){
    list.innerHTML="";
    phoneBook.forEach((item,index)=>{
    console.log(item)
    let tdElement =`<div>
                  <span>${item.personName}</span>
                  <span>${item.personEmail}</span>
                  <span>${item.personPhone}</span>
     </div>`
    list.innerHTML += tdElement;
    
});
}
console.log(phoneBook,"phoneBook");

    