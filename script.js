alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);
let skorP1 = 0;
let skorP2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  let p1 = parseInt(prompt("Player 1: masukan angka"));
  let p2 = parseInt(prompt("Player 2: masukan angka"));

  let random = getRandom();
  let ulangi = validasi(p1, p2);
  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (p1 === random) {
        alert("Player 1 Win");
        skorP1++;
      }
      if (p2 === random) {
        alert("Player 2 Win");
        skorP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - Player 1: ${skorP1}
    - Player 2: ${skorP2}`);

    ronde++;
    if (ronde <= 5) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      if (skorP1 > skorP2) {
        alert("Mantap Player 1");
        stop = false;
      } else if (skorP1 < skorP2) {
        alert("Mantap Player 2");
        stop = false;
      } else {
        alert(`Pertarungannya sengit bung!`);
        ronde = 1;
        skorP1 = 0;
        skorP2 = 0;
        stop = window.confirm("Maen lg gk?");
      }
    }
  }
}

function validasi(player1, player2) {
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert("salah satu player belum menebak");
    return false;
  }

  return true;
}

function getRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}

console.log(getRandom());