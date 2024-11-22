// Fungsi ini sekarang menerima sebuah parameter tambahan
// dengan nama fnCallback

// nantinya ini adalah sebuah fungsi yang akan menerima
// sebuah parameter berupa angka yang akan dicek
// apakah sesuai dengan kondisi yang ditentukan (ganjil / genap)
function pemilahAngka(deretAngka, fnCallback) {
    let hasil = [];
  
    for (let counter = 0; counter < deretAngka.length; counter++) {
      // di sini kita ekstrak kondisinya dan jadikan fungsi
      // ingat bahwa fnCallback kita asumsikan adalah sebuah fungsi
      // berarti fungsi ini bisa diinvoke dan passing argument
      // argumennya adalah si angka (deretAngka[counter])
      if (fnCallback(deretAngka[counter])) {
        hasil.push(deretAngka[counter]);
      }
    }
  
    return hasil;
  }
  
  // Fungsi untuk mencari angka ganjil
  function pencariGanjil(angka) {
    return angka % 2 === 1;
  }
  
  // Fungsi untuk mencari angka genap
  function pencariGenap(angka) {
    return angka % 2 === 0;
  }
  
  const deretAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Di sini kita invoke pemilahAngka dengan passing argumennya
  // adalah fungsi pencariGanjil atau pencariGenap
  console.log(pemilahAngka(deretAngka, pencariGanjil));
  console.log(pemilahAngka(deretAngka, pencariGenap));
  