//Third_task

function getFormatText(arr, rule, limit) {
    let result = [];

    result.unshift( Array(limit+2).fill(null).map( (e, i) => "*").join(""));

    function getString(arr, rule, limit) {
        let str = '';
        let finished = false;
        let end;
        for(let i = 0; i < arr.length; i++) {
            if( limit - str.length >= arr[i].length) {
                str = str + arr[i] + ' ';
                end = i;
            } else {
                break;
            }
            if(end === arr.length - 1) {
                finished = true;
            }
        }

        str = str.trim();

        let add = limit - str.length;
        
        if(str.length < limit) {
            switch (rule) {
                case "LEFT":
                    for(let i = 0; i < add; i++) {
                        str += ' ';
                    }
                    break;
                case "RIGHT":
                    for(let i = 0; i < add; i++) {
                        str = ' ' + str;
                    }
                    break;
            }
        }
        
        result.push("*" + str + "*");

        if( !finished) {
            getString(arr.splice(end+1, arr.length), rule, limit);
        }
    }

    for( let i = 0; i < arr.length; i++) {
        getString(arr[i], rule[i], limit);
    }

    result.push( Array(limit+2).fill(null).map( (e, i) => "*").join(""));

    return result;
}

console.log(getFormatText([
        ["Hello", "world"],
        ["Brad", "come", "to", "dinner", "with", "us"],
        ["He", "loves", "tacos"]
    ], 
    [
        'LEFT', 'RIGHT', 'LEFT'
    ],
    16
));