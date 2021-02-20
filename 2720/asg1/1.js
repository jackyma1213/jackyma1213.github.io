   //Task 0
   function specialbar(){
    let specialBar = document.querySelector("#special-nav");
    let specialBtn =  document.querySelector("#special-btn");

    if(specialBtn.classList.contains('btn-success')){
        specialBtn.classList.remove('btn-success');
        specialBtn.classList.add('btn-secondary');
        specialBar.style.display = "block";
    }else{
        specialBtn.classList.add('btn-success');
        specialBtn.classList.remove('btn-secondary');
        specialBar.style.display = "none";
    }

}

//Task 1
function task1(){
    
    document.querySelectorAll("h3").forEach((heading)=>{
        if(heading.classList.contains("text-start")){
            heading.classList.remove('text-start');
            heading.classList.add('text-center');
        }else if(heading.classList.contains("text-center")){
            heading.classList.remove('text-center');
            heading.classList.add('text-end');
        }else if(heading.classList.contains("text-end")){
            heading.classList.remove('text-end');
            heading.classList.add('text-start');
        }
    });

}

//Task2
// async function task2(){
    
//     let content = "";

//     await fetch('/data/hobbies.txt')
//     .then(res => res.text())
//     .then(txt => {content = txt;})

//     await new Promise(resolve => {
//         newHobby = prompt("Add new hobby:");
//         content += (newHobby === "" || newHobby === null) ?  "" : `<div class="col-sm-4">${newHobby}</div>`;
//         resolve();
//     });

//     await fetch('/data/hobbies.txt', {
//         method: 'PUT',
//         body: content
//     });

//     await fetch('/data/hobbies.txt')
//     .then(res => res.text())
//     .then(txt => {document.querySelector("#hobby").innerHTML = txt;});

// }

//Task3
window.onscroll = () =>{
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector("#progressBar").style.width = scrolled + "%";
}

function task3(){
    let x = document.querySelector("#progressDiv");
    let nav = document.querySelector("#nav");
    let specNav = document.querySelector("#special-nav");

    if (x.style.display === "none") {
        x.style.display = "flex";
        nav.style.top = "1rem";
        if(window.matchMedia("(max-width: 768px)").matches)
            specNav.style.top = "4.3rem";
        else
            specNav.style.top = "4.5rem";

    } else {
        x.style.display = "none";
        nav.style.top = "0";
        if(window.matchMedia("(max-width: 768px)").matches)
            specNav.style.top = "3.3rem";
        else
            specNav.style.top = "3.5rem";

    }

}

//resonsive
if(window.matchMedia("(max-width: 500px)").matches){
    document.querySelector("#col1").classList.remove('col-9');
    document.querySelector("#col1").classList.add('col-7');
    document.querySelector("#col2").classList.remove('col-3');
    document.querySelector("#col2").classList.add('col-5');;
}

//window on load
// window.onload = () =>{

//     //Hobbies
//     fetch('/data/hobbies.txt')
//     .then(res => res.text())
//     .then(txt => {document.querySelector("#hobby").innerHTML = txt;});

//     //Comments
//     fetch('/data/comments.txt')
//     .then(res => res.text())
//     .then(txt => {document.querySelector("#comments").innerHTML = txt;});

// };

//Comment
// async function processform(){
//     let email =  document.querySelector('#new-email').value;
//     let newComment =  document.querySelector('#new-comment').value;
//     let color = document.querySelectorAll("input[name=new-color]:checked")[0].value; 
//     const now = new Date()
//     let ip, location;
//     fetch('https://extreme-ip-lookup.com/json/')
//     .then( res => res.json())
//     .then(response => {
//         ip = response.query;
//         location = response.country;
//     })

//     let comment = "";

//     await fetch('/data/comments.txt')
//     .then(res => res.text())
//     .then(txt => {comment = txt;})

//     await new Promise(resolve => {
//         let pass = true;
//         if(email === ""){
//             document.querySelector("#emailerror").style.display= "block";
//             pass = false;
//         }else{
//             document.querySelector("#emailerror").style.display= "none";
//             if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
//                 document.querySelector("#emailerror").style.display= "none";
//             }else{

//                 document.querySelector("#emailerror").style.display= "block";
//                 pass = false;
//             }
//         }

//         if(newComment === ""){
//             document.querySelector("#commenterror").style.display= "block";
//             pass = false;
//         }else{
//             document.querySelector("#commenterror").style.display= "none";
//         }


//         if(pass === true){
//             comment += `<div class="d-flex border-bottom"> 
//                     <div class="flex-shrink">
//                     <svg height="100" width="100">
//                         <circle cx="50" cy="50" r="40" fill="${color}">
//                     </circle></svg>
//                     </div> 
//                     <div class="flex-grow-1">
//                     <h6>${email}</h6>
//                     <p>${newComment}</p>
//                     <blockquote class="blockquote">
//                     <footer class="blockquote-footer">
//                         <div class="d-flex flex-column"><div>Browser information:${navigator.appCodeName}</div><div>Platform: ${navigator.platform}</div><div>Date & Time: ${now}</div><div>IP: ${ip}</div><div>Location: ${location}</div></div>
//                     </footer>     
//                     </blockquote>
//                     </div>
//                 </div>`;

//                 document.querySelector("#emailerror").style.display= "none";
//                 document.querySelector("form").reset();  
//         }

//         resolve();
//     });

    // await fetch('/data/comments.txt', {
    //     method: 'PUT',
    //     body: comment
    // });

    // await fetch('/data/comments.txt')
    // .then(res => res.text())
    // .then(txt => {document.querySelector("#comments").innerHTML = txt;});
// }
