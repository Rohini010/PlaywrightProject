let j = 0;
while (j < 10) {

    console.log("while loop: ", j);
    j++;
}
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 5 == 0) {
        count++;
        if (count == 3)
            continue
        console.log(i);
        if (count == 7)
            break
    }
}
