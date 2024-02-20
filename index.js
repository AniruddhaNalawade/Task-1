var otp=0;
function onSubmit(){
    var fname=document.forms["regi-form"]["fname"].value;
    var email=document.forms["regi-form"]["email"].value;
    var pancard=document.forms["regi-form"]["pancard"].value;
    var loan=document.forms["regi-form"]["loan"].value;
    var captcha=document.forms["regi-form"]["captcha"].value;
    var captcha=document.forms["regi-form"]["captcha"].value;
    
    //validation

    if(fname.length == 0){
        document.getElementById("p1").innerHTML = "Enter your name ";
        document.getElementById("p1").style.color = "red";
        return false;
    }
    if(email.length == 0){
        document.getElementById("p2").innerHTML = "Enter your email ";
        document.getElementById("p2").style.color = "red";
        return false;
    }
    if(pancard.length == 0){
        document.getElementById("p3").innerHTML = "Enter your pancard details  ";
        document.getElementById("p3").style.color = "red";
        return false;
    }
    if(loan.length == 0){
        document.getElementById("p4").innerHTML = "Enter loan-amount ";
        document.getElementById("p4").style.color = "red";
        return false;
    }
    if(captcha.length == 0){
        document.getElementById("p5").innerHTML = " Enter valid captcha";
        document.getElementById("p5").style.color = "red";
        return false;
    }
   if(captcha.length == 0){
        document.getElementById("p6").innerHTML = " Enter valid captcha";
        document.getElementById("p6").style.color = "red";
        return false;

    }

    document.getElementById("p1").style.visibility=false;
    document.getElementById("p2").style.visibility=false;
    document.getElementById("p3").style.visibility=false;
    document.getElementById("p4").style.visibility=false;
    document.getElementById("p5").style.visibility=false;
    document.getElementById("p6").style.visibility=false;

     
    var user = {
        fname : fname,
        email : email,
        pancard : pancard,
        loan : loan,
        captcha : captcha,
        captcha: captcha,
    }

    localStorage.setItem("user", JSON.stringify(user));

    if(captcha==x+y){
        location.assign("/thankyou.html");
        return false;
    }
    else {
        document.getElementById("p6").innerHTML="Invalid captcha";
        document.getElementById("p6").style.color = "red";
        return false;
    }


    
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rs.' : '';
    return str;
}

document.getElementById('number').onkeyup = function () {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};
// for getting form values
function getUserName(){
    var userstr = localStorage.getItem("user");
    var user=JSON.parse(userstr);
    document.getElementById("h3").innerHTML+= ` ${user.fname}`; 
    document.getElementById("h4").innerHTML+= ` ${user.email}`; 

    generateotp();
}

//random numbers for captcha

let x = Math.floor((Math.random() *10) +1);
let y = Math.floor((Math.random() *10) +1);

 document.getElementById("captcha-label").innerHTML = ` ${x} + ${y}`;
 let captcha = x + y;
 document.getElementById("captcha").innerHTML;


 function generateotp(){
     otp = Math.floor(Math.random() * 10000);
    console.log(otp);
 }


 function verify(){
    var text = document.getElementById("text").value;
    if(otp==text){
        alert("verify Successfully");
    }
    else{
        alert("Error");
    }
 }
    
 