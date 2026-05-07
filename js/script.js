
setInterval(()=>{
    document.getElementById('date').innerText = new Date().toLocaleString()
})



  function increase() {
    let qty = document.getElementById("qty");
    qty.value++;
  }

  function decrease() {
    let qty = document.getElementById("qty");
    if (qty.value > 1) {
      qty.value--;
    }
  }

