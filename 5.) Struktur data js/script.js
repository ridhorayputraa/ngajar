// cara penulisan array secara langsung
const arr = [100, 200, 300];

// cara penulisan inisialisasi array yang tidak diketahui jumlahnya
const arr2 = [];

// cara menambahkan array secara manual
arr2[0] = 100;
arr2[1] = 200;
arr2[2] = 300;

// cara menambahkan nilai baru pada array di posisi terakhir
arr2.push(400);

// inisialisasi array
const sheet = [];

// deklarasi baris pada array
sheet[0] = [];
sheet[1] = [];
sheet[2] = [];

// deklarasi kolom pada array
sheet[0][0] = 100;
sheet[0][1] = 200;
sheet[0][2] = 300;
sheet[1][0] = 400;
sheet[1][1] = 500;
sheet[1][2] = 600;
sheet[2][0] = 700;
sheet[2][1] = 800;
sheet[2][2] = 900;


// cara penulisan object dengan menggunakan { ... }
const kucing = {
    nama: "Whiskas",
    warna: "Hitam",
    jumlahKaki: 4
  };
  
  // cara penulisan object dengan menggunakan new Object()
  const kucing2 = new Object();
  
  kucing2.nama = "Me-O";
  kucing2.warna = "Belang";
  kucing2.jumlahKaki = 4;

  const response = {
    statusCode: 200,
    endpoint: 'GET /api/v1/dummies',
    body: {
      message: 'Hello World',
      data: [
        { id: 1, name: 'Andre', age: 20 },
        { id: 2, name: 'Bella', age: 21 },
        { ... },
     ],
    totalData: 100
    responseTime: '1506ms'
  };

  // inisialisasi objek
const obj = {'a': 1, 'b': 2, 'c': 3};
// inisialisasi Map
let map = new Map();

// menambahkan data
map.set('halo', 'dunia');
map.set(1, 'satu');
map.set(obj, 'lho ini bisa?');

// mengakses data
console.log(map.get('halo'));
console.log(map.get(1));
console.log(map.get(obj));

// inisialisasi Set
let set = new Set();

let muridPertama = { nama: 'Mari' };
let muridKedua = { nama: 'Regal' };

// memasukkan data ke dalam set
set.add(muridPertama);
set.add(muridKedua);
set.add(muridPertama);

console.log(set.size); // tetap 2, bukan 3