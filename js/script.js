
setInterval(()=>{
  document.getElementById('date').innerText = new Date().toLocaleString()
})

  function increase(){
    let que = document.getElementById("quentaty")
    que.value++
  }

  function decrease() {
    let qty = document.getElementById("quentaty");
    if (qty.value > 1) {
      qty.value--;
    }
  }


  

