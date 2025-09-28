/* 
○ Biến playerName có giá trị là “Mario”.
○ Biến currentLives có giá trị là 3.
○ Các hằng số lưu coins theo level:
    ■ Level 1: 25;
    ■ Level 2: 30;
    ■ Level 3: 45; 
*/

let playerName = "Mario";
let currentLives = 3;
const coinLevels_1 = 25;
const coinLevels_2 = 30;
const coinLevels_3 = 45;

// a. Tính giá trị trung bình coin của 3 level và in ra console.

// Cách 1: Tính trực tiếp trong console.log
console.log("Giá trị trung bình coin của 3 level là", (`${((coinLevels_1 + coinLevels_2 + coinLevels_3) / 3)}`));

// Cách 2: Tính trước, rồi in ra
const average = (coinLevels_1 + coinLevels_2 + coinLevels_3) / 3;
console.log("Giá trị trung bình coin của 3 level là", `${average}`);

// b. In ra số coin dư khi chia cho 3

console.log("Số coin dư của level 1 khi chia cho 3 là", `${(coinLevels_1) % 3}`);
console.log("Số coin dư của level 2 khi chia cho 3 là", `${(coinLevels_2) % 3}`);
console.log("Số coin dư của level 3 khi chia cho 3 là", `${(coinLevels_3) % 3}`);