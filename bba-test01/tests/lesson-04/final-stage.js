let pairs = [];
function findPairDivisibleBy17() {
    for (i = 1; i <= 100; i++) {
        for (j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                pairs.push([i, j]);
                console.log([i, j]);
            }
        }
    }
    console.log("Tổng cộng có", pairs.length, "cặp chia hết cho 17")
}
findPairDivisibleBy17();