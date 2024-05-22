
// -----about tab----
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// -----side menu---------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

// -------contact form--------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxcflJhtTXZWC_QXLBiGivG948gIZPEgDQdH1uuX-taKqTtBZyaKuHd46SRidcg8IW7dA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent successfully.."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000) // Message will disappear after 5 seconds
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// -------show header when scroll------
let headerE1 = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    headerE1.classList.toggle("header-active", scrollY > 0)
})



