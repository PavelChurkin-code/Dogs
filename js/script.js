function showForm (form)
{
	if (form.style.display == "none") 
	{
		form.style.display = "block";		
		$("form.form").toggleClass("shadow");
	}
	$("button.btn").attr('disabled', true);
}

function closeForm(form)
{
	form.style.display = "none";
	$("form.form").toggleClass("shadow");

}
