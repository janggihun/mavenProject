/**
 * 
 */

 
 
 
 
 $('#searchBoom').on("click",function(){
	 
	  let gameName = $('#search-home').val();
	 if(gameName.length<1){
		 alert("빈칸을 작성해 주세요")
		 return false
	 }
	 
	
	 var result = gameName.search('#');
	 if(result == -1){ 
		 tagLine = "#KR1"
		 location.href = '/stm/'+gameName+tagLine
	 }else{
		 location.href = '/stm/'+gameName
	 }
	 
 })