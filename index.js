const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 4 * Math.random();

        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
};
async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3);
        }
        else {
            
            last.innerHTML = last.innerHTML + ".";
        }

    }, 200);

    let text = ["Initializing Hacking",
        "Reading your Files",
        "All Data is ready to send",
        "Sending all passwords and personal files to server",
        "Reset Your Phone ",
        "wait for while it takes time "];


    for (const item of text) {
        await addItem(item);
    } 
    await randomDelay()
    clearInterval(t);
};

main();
setInterval(() => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? 'green' : 'white';
}, 200);
