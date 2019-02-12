function sendForm()
{
	var name = $('#name').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var Credit_card = $('#Credit_card').val();
	var Card_Holder = $('#Card_Holder').val();
	var Card_Number = $('#Card_Number').val();
	var Exp_date = $('#Exp_date').val();
	var month = $('#month').val();
	var year = $('#year').val();
	var Street_address = $('#Street_address').val();
	var city = $('#city').val();
	var state = $('#state').val();
	var zip = $('#zip').val();
	var country = $('#country').val();
	var phone = $('#phone').val();

	$.ajax({
	     type: "POST",
	     url:"src/endpoint.php",
	     contentType: "application/x-www-form-urlencoded",
	     processData: true,
	     cache: false,
	     data: "name="+name+"&lastName="+lastName+"&email="+email,
	     success: function(dataReturn){
	       //$("#result").html("Informacion: "+dataReturn).show("slow");
	     }
	 });
}