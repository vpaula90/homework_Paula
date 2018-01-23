//Declare a variable and assign the value to be an array
var cereals =['Cookie Crisps','Captain Crunch','Honey Bunches of Oats', 'Honey Combs', 'Cocoa Pebbles'];
console.log(cereals);

//Use .push() to add an value to the array
cereals.push('Honey Nut Cheerios')

//Use an index reference to add a value to the array
cereals[1] = "Captain Crunch";


//Use splice to take the first item off the array
cereals.splice(0, 1);

//Use $.each() to iterate your array and print the value at each index to the console.log
//No idea what this means, will ask about it during class//

//BONUS: Create a <ul> in the HTML and use $.each() to add each value as a <li>

$.each(cereals,function(index, value){
    $('#favoriteCereals').append('<li class="list-group-item">' + value + '</li>');
});

$('#error').hide();

$('#addCereals').on('click', function(){
	var cereal = $('#cereal').val();
	if(cereal!='')
	{
	cereals.push(cereal);
	$('#favoriteCereals').append('<li class="list-group-item">' + cereal + '</li>');
	$('#cereal').val('');
	console.log("Count of Cereals Entered");
	$('#error').hide();
} else {
	$('#error').html("Trix Are For Kids!!");
	$('#error').show();

	}

});

