const logform = document.getElementById('LOGIN');
window.addEventListener('load',()=>{
    // logform.style.display="none";
});
window.addEventListener('load',()=>{
    setTimeout(()=>{
        logform.style.display = "block";
    },3000);
});

////
const logbtn = document.getElementById('login-menu-btn');
logbtn.addEventListener('click',()=>{
    logform.style.display = "none";
});


const banTxt = document.getElementById('bnr-txt');
const banAnim = () =>{
    setTimeout(() => {
                banTxt.innerHTML = "A";
            }, 500);
            setTimeout(() => {
                banTxt.innerHTML = "AR";
            }, 1000);
            setTimeout(() => {
                banTxt.innerHTML = "ART";
            }, 1500); 
            setTimeout(() => {
                banTxt.innerHTML = "ART A";
            }, 2000); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AN";
            }, 2500); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AND";
            }, 3000); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AND C";
            }, 3500); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AND CR";
            }, 4000); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AND CRAF";
            }, 4500); 
            setTimeout(() => {
                banTxt.innerHTML = "ART AND CRAFT";
            }, 5000); 
            setTimeout(() => {
                banTxt.innerHTML = "WEL";
            }, 5500); 
            setTimeout(() => {
                banTxt.innerHTML = "WELLCOM";
            }, 6000); 
}
setInterval(() => {
    banAnim();
}, 6100);

banAnim();