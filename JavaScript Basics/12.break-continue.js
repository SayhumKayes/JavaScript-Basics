// ...................break keyword .........................//

// for (var x = 1; x <= 100; x++) {
//     if (x == 10) {
//         break;
//     }
//     document.write(" " + x);
// }

// for (var x = 1; x <= 100; x++) {
//     document.write(" " + x);
//     if (x == 10) {
//         break;
//     }
// }

//................continue keyword.................... //

// for (var x = 1; x <= 100; x++) {
//     if (x % 2 == 0) {
//         continue;
//     }
//     document.write(" " + x);
// }

for (var x = 1; x <= 100; x++) {
    if (x % 2 != 0) {
        continue;
    }
    document.write(" " + x);
}