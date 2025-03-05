let input= document.getElementById('input');

let button=document.getElementById('btn');

function checkPalindrome(){
   const value=input.value;
   const reversed=value.split('').reverse().join('');
   if(value===reversed){
      alert('Palindrome');
   }else{
      alert('Not Palindrome');
   }

   input.value=''; // reset to be empty placeholder
}

