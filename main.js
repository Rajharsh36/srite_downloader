let theme="dark"
let hide_or_show=(a)=>{
    Ele=document.getElementById(a)
    if (Ele.style.display=="none"){
        
        Ele.style.display="block"
    }
    else{
        Ele.style.display="none"
    }
}


const theme_func=()=>{
    let ele=document.getElementById("theme")
    if (theme=='dark'){
      
        
    
        let body_ele=document.body
        let html_ele=document.documentElement
   
        
        body_ele.style.background="white";
        html_ele.style.background="white";
        ele.style.background='white';
        ele.style.borderColor="white"
        theme='light'
    


        
    }
    else{
        console.log("sun")
        
        let body_ele=document.body
        let html_ele=document.documentElement
     
        body_ele.style.background="gray"
        html_ele.style.background="gray"
        ele.style.background='gray'
        ele.style.borderColor="gray"
        theme='dark'
        
       
    }
}
const hide=(a)=>{
    let ele=document.getElementById(a);
    ele.style.display='none'
}
const show=(toshow)=>
{
 
        let antivirus_div=document.getElementById(toshow)
        console.log(antivirus_div.style.display)
        if (antivirus_div.style.display=="none")
        {
            antivirus_div.style.display="inline-block";
        }
        else
        {
            console.log("Already showing")
            antivirus_div.style.display="none";
        }


    
  
}