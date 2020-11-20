function tampilkan () {
    var beratBadan = document.getElementById("BB").value
    var tinggiBadan = document.getElementById("TB").value

    if (beratBadan === false || tinggiBadan === false) {
        alert('Silahkan isi Berat dan Tinggi badannya ya!')
        return
    }
    
    if (!tinggiBadan || !beratBadan) {
        alert('Masukan angkanya ya ;)')
        return
    }
    
    let ideal = beratBadan / (tinggiBadan * tinggiBadan / 10000)
    let hasil = ideal.toFixed(2)
    
    document.getElementById("H").style.display = "block"
    document.getElementById("hasil").innerHTML = hasil.toLocaleString()
}

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
    tampilkan()
});

// document.getElementById("hasil").innerHTML = hasil