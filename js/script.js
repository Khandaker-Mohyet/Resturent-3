
setInterval(()=>{
    document.getElementById('time').innerText = new Date().toLocaleString()
})


// const qty = document.getElementById("qty");

// const increase = () => qty.value++;

// const decrease = () => qty.value > 1 && qty.value--;


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

