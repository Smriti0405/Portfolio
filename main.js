
let url = 'https://leetcode-stats-api.herokuapp.com/Smriti_Sri';
let f = fetch(url);
let str = "";
let box = document.getElementsByClassName("que");
f.then((val) => {
    return val.json();
})
.then((val1)=>{
    console.log(val1);
    box[0].getElementsByTagName("h3")[0].innerHTML = val1.easySolved;
    box[1].getElementsByTagName("h3")[0].innerHTML = val1.mediumSolved;
    box[2].getElementsByTagName("h3")[0].innerHTML = val1.hardSolved;
})
