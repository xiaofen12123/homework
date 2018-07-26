function checkpassword(){
	var pwd=document.getElementById("psd").value;
	var pwd1=document.getElementById("psd1").value;
	if(pwd!=pwd1){
      document.getElementById("errorpwd").style.display="block";
      return false;
	}
}