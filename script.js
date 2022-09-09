let drink = prompt("Який напій обираєте?");
let count = prompt(`Скільки ви пляшок ${drink} хочете?`);
for (let i = count; i > 0; i--) {
  document.write(`${i} bottles of ${drink} on the wall,<br>
    ${i} bottles of ${drink},<br>
    If one of those bottles should happen to fall<br>`);
}
document.write(`No more bottles of ${drink} on the wall, no more bottles of ${drink}.<br>
There's nothing else to fall, because there's no more bottles of ${drink} on the wall.`);
