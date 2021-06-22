

 let quer040520 = document.getElementById('040520');
 let btn040520 = document.getElementById('btn040520');
 
 
 function show () {
	 btn040520.style.display='inline';
	 
 }
 
 let reset = function(){
	 btn040520.style.display='';
 }
 
 quer040520.addEventListener('mouseover', show); 
 quer040520.addEventListener ('mouseleave', reset);


 const library = {
  
	items: [
		{   
			topic: 'Reisen',
			date: '30. Juni 2020',
			
		},
		{
			
			topic: 'Reisen',
			date: '30. Juni 2020',
		   
		},
		
		{
	   
		topic: 'Reisen',
		date: '30. Juni 2020'
		},
	  
		{   
			topic: 'Maske',
			date: '4. Mai 2020',
			
		}
	
	   
	
	]}


const templateElement = document.getElementById("handle");
const templateSource= templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(library);
document.getElementById("meta") = compiledHtml;










