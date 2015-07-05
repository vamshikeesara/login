/*$(document).ready(function validation(){*/

function name(userName)  
{   
var letters = "vamshi";  
if(userName == letters)  
{  
//alert("username"); 
return true;
}  
else  
{  
alert('Username must have alphabet characters only');  
userName.focus();  
return false;  
}  
} 


function pswd(password,mx,my)  
{  
	//alert(password.length);

var password_len = password.length;  
if (password_len == 0 ||password_len >= my || password_len < mx)  
{  
alert("Password should not be empty / length be between "+mx+" to "+my);  
password.focus();  
return false;  
} else { 
	//alert("Password Ok");
return true; 
} 
}


function validateForm(){
	var userName = document.login.login__username.value; //vamshi
	var password = document.login.login__password.value; //5yer5f
	
	if (name(userName) && pswd(password,2,4)){
		alert ("login successful");
	}
	else{
	alert ("enter correct values ");
	};
		
}
	


