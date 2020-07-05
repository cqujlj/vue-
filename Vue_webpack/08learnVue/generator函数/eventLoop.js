
function ELoop() {
    // 当前任务
    let p = new Promise((resolve, reject)=>{
        console.log("current Task");  //promise中属于同步任务，then中的才是异步
        resolve();
    });
    let nextP;
    setTimeout(()=>{   //第一个放入宏任务队列
        console.log("MacroTask_1");
        nextP.then(()=>{
            // 第一次执行时，这段代码并没有执行到。
            console.log("MicroTask_promise_1"); //第一个MicroTask
        });
        console.log("MacroTask_1 end")
    }, 0) ;

    setTimeout(()=>{   //第一个放入宏任务队列
        console.log("MacroTask_2");
        console.log("MacroTask_2 end")
    }, 0)// 第二个MacroTask


    nextP = p.then(()=>{   //then()属于异步 微任务  //第一个MicroTask
        console.log("MicroTask_promise_2");
        console.log(1)
    }).then(()=>{   // 第二个MicroTask
        console.log("MicroTask_promise_3");
        console.log(1)
    });

    console.log("current Task end")   //同步代码
}

ELoop();

/**输出结果：
 current Task
 current Task end
 MicroTask_promise_2
 1
 MicroTask_promise_3
 1
 MacroTask_1
 MacroTask_1 end
 MicroTask_promise_1
 MacroTask_2
 MacroTask_2 end
 **/