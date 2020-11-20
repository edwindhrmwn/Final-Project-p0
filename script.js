/* Body Mass Index (BMI) adalah cara menghitung berat badan ideal berdasarkan
tinggi dan berat badan. Berbeda dengan cara perhitungan sebelumnya yang membedakan 
cara perhitungan pria dan wanita, BMI dibedakan berdasarkan usia. Kalkulator BMI -yang
menjadi salah satu fitur di aplikasi Halodoc, dapat digunakan oleh seseorang yang sudah
berusia 20 tahun atau lebih. Bagi mereka yang berusia di bawah 20 tahun, ada cara lain
untuk menghitungnya*/

{/* <input type=”text” id=”angkaSatu”>
    <select id=”op”>
        <option value=”+”>+</option>
        <option value=”-”>-</option>
        <option value=”x”>x</option>
        <option value=”/”>/</option>
    </select>
    <input type=”text” id=”angkaDua”>
    <input type=”submit” onclick=”kalkulator()” value=”=”>
    <input type=”text” id=”hasil”> */}

function tampilkan () {
    var beratBadan = document.getElementById("BB").value
    var tinggiBadan = document.getElementById("TB").value
    var ideal = beratBadan / (tinggiBadan * tinggiBadan / 10000)
    var hasil = ideal.toFixed(2)

    document.getElementById("hasil").innerHTML = hasil
}

document.getElementById("hasil").innerHTML = hasil