function hasil() {
  // mengambil nilai dari form
  const gender = document.querySelector('input[name="gender"]:checked').value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var usia = document.getElementById("age").value;
  //hitung bmi
  var hasil = weight / (height / 100);
  //buat 2 digit dibelakang koma
  var hasill = hasil.toFixed(2);
  //tampilkan input form
  document.getElementById("hasil-text").innerHTML = "Hasil BMI :" + " " + hasill;
  document.getElementById("hasil-jk").innerHTML ="("+ gender + " / " + usia + ")";
  //perkondisian keterangan bmi
  if (hasill < 18.5) {
    document.getElementById("ket").innerHTML = "anda memiliki berat badan kekurangan berat badan";
  } else if(hasill < 24.5) {
    document.getElementById("ket").innerHTML = "anda memiliki berat badan normal";
  } else if(hasill < 30 ) {
    document.getElementById("ket").innerHTML = "anda memiliki berat badan kelebihan berat badan";
  } else {
    document.getElementById("ket").innerHTML = "anda memiliki berat badan kegemukan (obesitas)";
  }
//pengkondisian solusi
if (hasill < 18.5) {
    document.getElementById("solusi").innerHTML = `hasil bmi anda adalah ${hasill} <br> anda kekurangan berat badan <br> Cara terbaik untuk membuat berat badan anda normal adalah Tambah asupan kalori, Pilih makanan padat gizi, Rutin berolahraga, Minum susu weight gain`;
  } else if(hasill < 24.5) {
    document.getElementById("solusi").innerHTML = `hasil bmi anda adalah ${hasill} <br> anda memiliki berat badan normal <br> Cara terbaik untuk menstabilkan berat badan anda adalah olahraga teratur, mengkonsumsi makanan sehat`;
  } else if(hasill < 30 ) {
    document.getElementById("solusi").innerHTML = `hasil bmi anda adalah ${hasill} <br> anda memiliki berat badan kelebihan berat badan <br> Cara terbaik untuk menurunkan berat badan anda adalah Menjaga pola makan sehat. Untuk menurunkan berat badan, diperlukan pengurangan asupan kalori secara bertahap`;
  } else {  
    document.getElementById("solusi").innerHTML = `hasil bmi anda adalah ${hasill} <br> anda memiliki berat badan kegemukan (obesitas) <br> Cara terbaik untuk menurunkan berat badan anda adalah Konsumsi sayur dan buah minimal 5 porsi setiap harinya, Membatasi tidur yang berlebihan, Meningkatkan aktivitas fisik minimal 30 menit setiap hari.`;
  }
  //clear data
}
function res() {
  document.getElementById("hasil-text").innerHTML = "";
  document.getElementById("ket").innerHTML = "";
  document.getElementById("hasil-usia").innerHTML = "";
  document.getElementById("hasil-jk").innerHTML = "";
  document.getElementById("solusi").innerHTML = "";
}
