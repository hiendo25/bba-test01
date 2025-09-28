// Bài 1

/* 
Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
○ thuộc tính name: UPPERCASE của name gốc
○ level: x2 của level gốc
○ health: x3 của health gốc
*/
function createCharacters() {
    const characters = [
        {
            name: "do thanh hien",
            level: 2,
            health: 3
        }
    ];
    const charactersPowerUp = characters.map(({ name, level, health }) => ({
        name: name.toUpperCase(),
        level: level * 2,
        health: health * 3
    }
    )
    );
    console.log("Power up:", charactersPowerUp);
    const charactersList = [
        { name: "do thanh hien", level: 2, health: 3111 },
        { name: "do thanh dat", level: 2, health: 3000 },
        { name: "do thanh tung", level: 2, health: 2200 },
        { name: "do thanh hoa", level: 2, health: 1000 }
    ];
    const possibleWinners = charactersList.filter(charactersList => charactersList.health > 1000);
    console.log("Possible winners:", possibleWinners);
}
createCharacters();

/* Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners” */
/* function createCharacters() {
    const characters = [
        { name: "do thanh hien", level: 2, health: 3111 },
        { name: "do thanh dat", level: 2, health: 3000 },
        { name: "do thanh tung", level: 2, health: 2200 },
        { name: "do thanh hoa", level: 2, health: 1000 }
    ];
    const possibleWinners = characters.filter(characters => characters.health > 1000);
    console.log(possibleWinners);
}
createCharacters();
*/

// Bài 2

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];
// console.log(players);
function createLeaderBoard(players) {
    players.sort((a, b) => b - a);
    for (i = 0; i < players.length; i++) {
        if (i + 1 === 1) {
            medal = "🥇"
        }
        else if (i + 1 === 2) {
            medal = "🥈"
        }
        else if (i + 1 === 3) {
            medal = "🥉"
        }
        else {
            medal = "  "
        }
        console.log(medal, i + 1 + `.`, players[i].name, `-`, players[i].score, `pts`);
    }
}
createLeaderBoard(players);