// ============================================ SOAL NO 1 ============================================================

let hitungKaosKaki = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length - i; j++) {
      if (input[i] === input[j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

let input1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// Output yang diharapkan: 3
console.log(hitungKaosKaki(input1));

let input2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
// Output yang diharapkan: 6
console.log(hitungKaosKaki(input2));

let input3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// Output yang diharapkan: 4
console.log(hitungKaosKaki(input3));

// ============================================== SOAL NO 2 =======================================================

let countWord = (input) => {
  let newWord = input.split(" ");
  let count = 0;
  for (let i = 0; i < newWord.length; i++) {
    for (let j = 0; j < newWord[i].length; j++) {
      if (
        newWord[i][j] === "*" ||
        newWord[i][j] === "_" ||
        newWord[i][j] === "(" ||
        newWord[i][j] === "[" ||
        newWord[i][j] === "!" ||
        newWord[i][j] === "=" ||
        newWord[i][j] === "&"
      ) {
        count++;
      }
    }
  }
  return newWord.length - count;
};

let input4 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
// Output: 5;
console.log(countWord(input4));

let input5 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
// Output: 3;
console.log(countWord(input5));

let input6 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";
// Output: 4;
console.log(countWord(input6));
