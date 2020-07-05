


var m=3;  //行数
var n=3;    //列数
var arr = new Array()
var res = new Array()
var t =0;
for(let i = 0 ; i < m ; i++){
    arr[i] = new Array()
    for(let j = 0 ; j < n ; j ++){
        // mat[i][j] = Math.floor(Math.random()*10+1);
        arr[i][j]=i+j+t++;
    }
}
console.log("mat:",arr);
console.log("res:",res);

if (m === 1 || n === 1) {
    console.log( arr[m - 1][n - 1]);
} else {
    //存储数组中每个元素路径的最小值
    let minArr = [];
    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
        }
        minArr.push(temp);
    }

    let minSum = 0;

    // 从下往上遍历（行）
    for (let i = m - 1; i >= 0; i--) {
        // 从右到左遍历（列）
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) {
                minArr[i][j] = arr[i][j];
            } else if (i === m - 1) {
                minArr[i][j] = minArr[i][j + 1] + arr[i][j];
            } else if (j === n - 1) {
                minArr[i][j] = minArr[i + 1][j] + arr[i][j];
            } else {
                if (minArr[i + 1][j] > minArr[i][j + 1]) {
                    minArr[i][j] = minArr[i][j + 1] + arr[i][j];
                } else {
                    minArr[i][j] = minArr[i + 1][j] + arr[i][j];
                }
            }
        }
    }
    console.log(minArr[0][0])
}