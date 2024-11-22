const kumpulanAngka = [100, 200, 300, 400, 500];

const bacaData = (arrayAngka, posisi, fnCallback) => {
  // Di sini kita berasumsi,
  // Bahwa fnCallback akan memiliki 2 buah parameter
  // parameter-1 adalah untuk menampung error yang terjadi
  // parameter-2 adalah untuk menampun data yang akan dilempar
  if (arrayAngka.length <= 0) {
    // di sini terjadi error karena arraynya tidak punya data
    fnCallback('maaf, arraynya 0', null);
  } else if (posisi > arrayAngka.length - 1) {
    // di sini terjadi error karena posisi yang diberikan
    // melebihi array yang disediakan
    fnCallback('maaf, posisi melebihi indeks yang tersedia', null);
  } else {
    // di sini adalah kondisi sukses
    console.log('Data sekarang adalah ' + arrayAngka[posisi]);
    // fnCallback akan mengembalikan 2 data:
    // parameter-1 karena tidak ada error, diasumsikan null
    // parameter-2 karena ada datanya, kita lempar datanya
    // yaitu arrayAngka[posisi]
    fnCallback(null, arrayAngka[posisi]);
  }
};

// -- Nested Chaining dimulai di sini

// Di sini kita akan mencoba untuk menggunakan baca data
// perhatikan di sini kita menggunakan nama variabel untuk data
// adalah data1
bacaData(kumpulanAngka, 4, (err, data1) => {
  if (err) {
    // apabila terjadi error, maka kita akan console.log errornya
    // sekaligus return (agar kondisi di bawahnya tidak dijalankan lagi)
    return console.log(err);
  }

  // Perhatikan di sini untuk data namanya adalah data2
  bacaData(kumpulanAngka, 1, (err, data2) => {
    // sama dengan penjelasan jika ada error di atas
    if (err) {
      return console.log(err);
    }

    // Perhatikan di sini untuk data namanya adalah data3
    bacaData(kumpulanAngka, 2, (err, data3) => {
      // sama dengan penjelasan jika ada error di atas
      if (err) {
        return console.log(err);
      }

      // Terakhir kita mencoba untuk jumlahkan semuanya
      console.log('Jumlah: ' + (data1 + data2 + data3));
    });
  });
});
