function r(){
    // var named=localStorage.getItem('name');
    // console.log(JSON.parse(named));
    // let dat=localStorage.getItem('name');
    
    // console.log(dat);
    // let x=document.getElementById("name");
    // x.text(dat);
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("mobileNo").innerHTML = localStorage.getItem("mobileNo");
    document.getElementById("degree").innerHTML = localStorage.getItem("degree");
    document.getElementById("branch").innerHTML = localStorage.getItem("branch");
}