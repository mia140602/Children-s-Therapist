var info='https://children-s-therapist-default-rtdb.firebaseio.com/info.json'
var contact='https://children-s-therapist-default-rtdb.firebaseio.com/contact.json'


//LẤY THÔNG TIN TỪ TRANG FIREBASE VỀ WEBSITE
function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            
            document.getElementById("info-phone").innerText = info.phone;
            document.getElementById("info-website").innerText = info.website;
            document.getElementById("info-mota").innerText = info.mota;
        }
    };
    xhttp.open("GET", info, true);
    xhttp.send();
 }
 getInfo();



//          TẠO JS KIỂM TRA LỖI
 function kiemtra() {
    var loi="";
    

    //kiem tra hoten
    var name=document.getElementById("name");
    if (name.value==""){
        name.className="loi";
        loi += "Họ tên không được bỏ trống";

    }
    else name.className="field";

    //kiểm tra email
    const patternEmail=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
    var email= document.getElementById("email");
    if (email.value==""){
        email.className="loi";
        loi += "  Bạn chưa nhập email";
    } else if (email.value.match(patternEmail)) {
        email.className="field";
    }else  {
        email.className="loi";
        loi +="Email nhập sai";
    }

    //kiem tra sdt
    var sdt=document.getElementById("sdt");
    var sdtPattern=/^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (sdt.value==""){
        sdt.className="loi";
        loi += "   SDT không được bỏ trống";

    }
    else if (sdt.value.match(sdtPattern)) {
        sdt.className="field";
    }else  {
        sdt.className="loi";
        loi +="SDT nhập sai";
    }
    
//tra ve gia tri kiem tra
    if (loi!="") {
        document.getElementById('baoloi').innerHTML=loi;
        setTimeout(document.getElementById('baoloi').innerHTML,10000);
        return false;
    }
    
 }



//  ///                    LƯU DỮ LIỆU TỪ FORM CONTACT LÊN FIREBASE







function saveFormData() {
    var xhttp = new XMLHttpRequest();
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      sdt: document.getElementById("sdt").value,
      mess: document.getElementById("message").value,
     
    };
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
      }
    };
    xhttp.open(
      "POST",
      "https://children-s-therapist-default-rtdb.firebaseio.com/Contact.json"
    );
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(params));
  }
  
  var form = document.getElementById("info-form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(0);
    if (
      document.getElementById("name").value.length !== 0 &&
      document.getElementById("email").value.length !== 0 &&
      document.getElementById("sdt").value.length !== 0
    ) {
      saveFormData();
      alert("Information Successfully Saved");
      document.getElementById("info-form").reset();
    } else {
      alert("Please Fill The Blanks");
    }
  });




  
