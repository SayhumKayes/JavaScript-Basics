// ES7 async and await function

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task one is completed <br>`);
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task two is completed <br>`);
        }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject(`Task three is not completed <br>`);
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task four is completed <br>`);
    });
};

async function myFunction1() {  // ES7 async function
    try {
        const t1 = await taskOne();
        document.write(t1);
        const t2 = await taskTwo();
        document.write(t2);
        const t3 = await taskThree();
        document.write(t3);
        const t4 = await taskFour();
        document.write(t4);
    } catch (error) {
        document.write(error);
    }
};

// const myFunction2 = async () => {  // ES6 async function with arrow function
//     try {
//         const t1 = await taskOne();
//         document.write(t1);
//         const t2 = await taskTwo();
//         document.write(t2);
//         const t3 = await taskThree();
//         document.write(t3);
//         const t4 = await taskFour();
//         document.write(t4);
//     }catch(error){
//         document.write(error);
//     }
// };

myFunction1();
myFunction2();