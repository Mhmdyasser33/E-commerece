        const btn = document.getElementById("submit") ; 
        const Nameinput = document.getElementById("Fullname") ; 
        const Emailinput = document.getElementById("email") ; 
        const Creditinput = document.getElementById("Credit") ; 
        const Productinput = document.getElementById("Product") ; 

        btn.addEventListener('click' , ()=>{
            if(Nameinput.value != "" && Emailinput.value != "" && Creditinput.value != "" && Productinput.value != ""){
                {
            alert("Your product has been submitted and will arrive soon!");
            Nameinput.value = '' ; 
            Emailinput.value = '' ; 
            Creditinput.value = '' ; 
            Productinput.value = '' ;
            }
        }
        })