let down = false;
function MenuDropdown() {
    console.log("menu dropdown")
    if(down){
        console.log("hidden")
        document.getElementById("MenuDropdown").style.marginTop = "-196px";
       // document.getElementById("MenuDropdown").style.visibility = "hidden";
        down = false;
    } else {
        console.log("visible")
        document.getElementById("MenuDropdown").style.marginTop = "0px";
        // document.getElementById("MenuDropdown").style.visibility = "visible";
        down = true;
    }
}


function home() {
    window.open("http://jacksonfischer.com","_self");
}
function design() {
    window.open("http://3D-Design.jacksonfischer.com/3dDesign/index.html","_self");
}

function woodworking() {
    window.open("http://woodworking.jacksonfischer.com","_self");
}
function resume() {
    window.open("http://resume.jacksonfischer.com","_self");
}
// function secret() {
//     window.open("http://x.jacksonfischer.com","_self");
// }

// function toString(letters) {
//     str = "";
//     letters.forEach(char => {
//         str += char;
//     });
//     return str;
// }
// let randomLet = true
// let letters = ["a","a","a","a","a","a","a","a"]
// let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
// function x() {
//     for (let i = 0; i < 8; i++) {
//         curLet = 0;
//         curLet = Math.floor(Math.random() * 8);
//         letters[curLet] = abc[Math.floor(Math.random() * 26)]
//         document.getElementById("Page-Select4").innerHTML = toString(letters);
//     }
//     window.setTimeout(x, 30);
//   }
