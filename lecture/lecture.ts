let num_multipl: number = 0;
const div_question = document.createElement("div");
document.body.append(div_question);
const fnInintMultiplicationTable = () => {
    let randNum_one: number = Math.ceil(Math.random() * 9);
    let randNum_two: number = Math.ceil(Math.random() * 9);
    num_multipl = randNum_one * randNum_two;
    div_question.textContent = `${randNum_one} * ${randNum_two} ?`;
}

fnInintMultiplicationTable();

const frm_MultiplicationTabel = document.createElement("form");
document.body.append(frm_MultiplicationTabel);

const inptNum_answer = document.createElement("input");
inptNum_answer.type = "number";
inptNum_answer.id = "inptNum_answer";
frm_MultiplicationTabel.append(inptNum_answer);

const btn_submit = document.createElement("button");
btn_submit.textContent = "제출";
btn_submit.type = "submit";
frm_MultiplicationTabel.append(btn_submit);

const div_result = document.createElement("div");
document.body.append(div_result);

let cnt_fail = 0;
frm_MultiplicationTabel.addEventListener("submit", (e) => {
    e.preventDefault();
    // parseInt((<HTMLInputElement>document.querySelector("")).value);
    const inpt_answer = <HTMLInputElement>document.getElementById("inptNum_answer");
    const inptNum_answer = parseInt(inpt_answer.value);
    if(!inptNum_answer) {
        inpt_answer.focus();
        alert("Input answer");
        return false;
    }
    if(num_multipl === inptNum_answer) {
        div_result.textContent = `O - ${++cnt_fail}`;
        fnInintMultiplicationTable();
        cnt_fail = 0;
    } else {
        div_result.textContent = `X - ${++cnt_fail}`;
    }
    inpt_answer.value = "";
    inpt_answer.focus();
});
