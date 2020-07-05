function myMethod() {
    let height = 500;   //大纸张的height
    let width = 400;  //大纸张的width

    var block = new Array();          //二维数组  放[height,width];
    for (var i = 0; i < 10000; i++) {
        block[i] = new Array();
        for (var j = 0; j < 2; j++) {
            arr[i][j] = "";
        }

        for (let i = 0; i < block.length; i++) {
            block[i][0] = Number(Math.random() * 10000) % 10;//w  随机复制
            block[i][1] = Number(Math.random() * 10000) % 10;//h  随机复制
        }

        var location = [[[]]];  //  三位数组  存结果【page,x,y】


        var page = 0;
        var left = 0;
        var top = 0;
        var line_max_h = 0;   //记录该行最大的height的高度
        var total_h = 0;   //这一页所有小纸张的高度  超过height则换页
        for (let i = 0; i < block.length; i++) {  //循环10000次

            location[i][0] = page;
            location[i][1] = left;
            location[i][2] = top;

            if (block[i][1] > line_max_h) {  //当前照片的高度>当前纸张最高的高度
                line_max_h = block[i][1];   //则line_max_h=该纸张的高度
            }

            left = left + block[i][0];   //这张图片的left=上一个left+我的width
            //先放置 再判断   忽略边界问题
            if (left > width) {
                //换行
                left = 0;
                top = line_max_h;
                total_h = total_h + line_max_h;
                line_max_h = 0;
            }

            if (total_h > height) {
                //换行
                page++;
                left = 0;
                top = 0;
                line_max_h = 0;
                total_h = 0;
            }
        }

    }
    return  location;


}

