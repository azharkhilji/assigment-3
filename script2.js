


    
    function addinp(){



        var num= document.getElementById('number').value;

        if (document.getElementById('first_name').value === "") {
             alert("Name must be filled out.");
         }
         else if(document.getElementById('last_name').value === ""){

            alert("Last Name must be filled out.");

         }
         else if (document.getElementById('email').value === ""){

            alert(" Email must be filled out.");

         }
         else if (document.getElementById('number').value === ""){

            alert(" number must be filled out.");

         }
 
        else if(isNaN(num)){
            

                alert(" only number allow.");
    
             }

             
        else if (num.length<11 || num.length >11){
            

                alert(" Mobile Number must be 11 digit.");
    
            }





       

          
}


        
        



