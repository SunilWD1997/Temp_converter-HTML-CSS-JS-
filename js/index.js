document.getElementById('cel').addEventListener('input', ()=>{
    let cel = document.getElementById('cel').value;
    
    const cel_to_far = Math.round((cel * 9/5) + 32);
       console.log(cel_to_far)
   document.getElementById('far').value = cel_to_far;
})
document.getElementById('far').addEventListener('input', ()=>{
    let far = document.getElementById('far').value;
    
    const far_to_cel = Math.round((far - 32) * 5/9);
       console.log(far_to_cel)
   document.getElementById('cel').value = far_to_cel;
})