// export 

export let text = "Welcome to module";

function myFunction(txt){
    text = txt;
}

export {myFunction as setTxt};