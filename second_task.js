// Second task

function checkMatrix(arr) {
    let result = [];

    for (let i = 0; i < arr[0].length - 2; i++) {
        let temp = '';

        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < 3; k++) {
                temp += arr[j][k + i];
            }
        }

        if( temp.split('').sort( (a,b) => a - b).join('') === '123456789' ) {
            result.push(true);
        } else {
            result.push(false);
        }

    }

    return result;
}

console.log(checkMatrix(
    [
        [1, 2, 3, 2, 7],
        [4, 5, 6, 8, 1],
        [7, 8, 9, 4, 5]
    ]
));