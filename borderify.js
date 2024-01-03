const getElementsByTagNameArray = (tagName) => {
    const wtf = document.getElementsByTagName(tagName);
    let array = [];
    for (let i = 0; i < wtf.length; i++) {
        array.push(wtf[i]);
    }
    return array;
}

const inputs = getElementsByTagNameArray("input");
const labels = getElementsByTagNameArray("label");

let labeled_inputs = [];
for (const label of labels) {
    for (const input of inputs) {
        if (label.getAttribute("for") == input.getAttribute("id")) {
            labeled_inputs.push({
                "label": label,
                "input": input,
            });
        }
    }
}

console.log(labeled_inputs);