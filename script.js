let initialValue = "X"
const test=(e)=>{
    // console.log(e);
    // e.target.innerText = ""
    // xPlay = e.target.innerText
    if (initialValue=="X" && e.target.innerText==""){
        e.target.innerText = "X"
        initialValue = "O"

      if((one1.innerText==="X" && one2.innerText==="X" && one3.innerText==="X")|| (two1.innerText==="X" && two2.innerText==="X" && two3.innerText==="X")|| (three1.innerText==="X" && tw02.innerText==="X" && three3.innerText==="X")){
          alert("win")
          initialValue=""
      }
      else if((one1.innerText==="X" && two1.innerText==="X" && three1.innerText==="X")|| (one2.innerText==="X" && two2.innerText==="X" && three3.innerText==="X")|| (one3.innerText==="X" && two3.innerText==="X" && three3.innerText==="X") || (one1.innerText==="X"&&two2.innerText==="X" && three3.innerText==="X")|| (one3.innerText==="X"&& two2.innerText==="X"&& three1.innerText=="X" )){
          alert("win")
      }

    }


    else if(initialValue=="O" && e.target.innerText==""){
        e.target.innerText = "O"
        initialValue = "X"
    
      }  if((one1.innerText==="O" && two1.innerText==="O" && three1.innerText==="O")|| (one2.innerText=="O" && two2.innerText=="O" && three2.innerText=="O")|| (one3.innerText=="O" && tw03.innerText=="O" && three3.innerText=="O")||(one1.innerText=="O"&& two2.innerText=="O"&& three3.innerText=="O")||(one3.innerText=="O" && two2.innerText=="O"&&three1.innerText=="O") ){
    alert("win")
    initialValue=""
    }
   
}
const submit = ()=>{
    let firstplayer=p1.value;
    let secondplayer=p2.value;
if(p1.value==""&& p2.value ==""){
    alert("die")
}
else if(p1.value ==""){
    p1.className="border border-2 border-secondary"
    alert("ght")
}
else if(p2.value ==""){
    p2.className=" border border-2 border-secondary"
    alert("ght")
}
else{
    name1.innerText==     firstplayer
    name2.innerText==     secondplayer
    p1=""
    p2=""
}
}