let powerUp = "mushroom";

// Cách 1: Dùng if...else if
let effect = " ";
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
}
else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
}
else if (powerUp === "star") {
    effect = "Mario is invincible!";
}
else if (powerUp === "none") {
    effect = "Mario is normal";
}
else if (powerUp === "Khác") {
    effect = "Unknown power-up";
}
else {
    effect = "Power-up không hợp lệ";
}
console.log(effect);

// Cách 2: Dùng Ternary Operator 
// const effect =
//     powerUp === "mushroom" ? "Mario becomes Super!" :
//         powerUp === "flower" ? "Mario can shoot fireballs!" :
//             powerUp === "star" ? "Mario is invincible!" :
//                 powerUp === "none" ? "Mario is normal" :
//                     powerUp === "Khác" ? "Unknown power-up" :
//                         "Power-up không hợp lệ";

// console.log(effect);
