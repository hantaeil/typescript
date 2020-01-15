var num_multipl = 0;
var div_question = document.createElement("div");
document.body.append(div_question);
var fnInintMultiplicationTable = function () {
    var randNum_one = Math.ceil(Math.random() * 9);
    var randNum_two = Math.ceil(Math.random() * 9);
    num_multipl = randNum_one * randNum_two;
    div_question.textContent = randNum_one + " * " + randNum_two + " ?";
};
fnInintMultiplicationTable();
var frm_MultiplicationTabel = document.createElement("form");
document.body.append(frm_MultiplicationTabel);
var inptNum_answer = document.createElement("input");
inptNum_answer.type = "number";
inptNum_answer.id = "inptNum_answer";
frm_MultiplicationTabel.append(inptNum_answer);
var btn_submit = document.createElement("button");
btn_submit.textContent = "제출";
btn_submit.type = "submit";
frm_MultiplicationTabel.append(btn_submit);
var div_result = document.createElement("div");
document.body.append(div_result);
var cnt_fail = 0;
frm_MultiplicationTabel.addEventListener("submit", function (e) {
    e.preventDefault();
    // parseInt((<HTMLInputElement>document.querySelector("")).value);
    var inpt_answer = document.getElementById("inptNum_answer");
    var inptNum_answer = parseInt(inpt_answer.value);
    if (!inptNum_answer) {
        inpt_answer.focus();
        alert("Input answer");
        return false;
    }
    if (num_multipl === inptNum_answer) {
        div_result.textContent = "O - " + ++cnt_fail;
        fnInintMultiplicationTable();
        cnt_fail = 0;
    }
    else {
        div_result.textContent = "X - " + ++cnt_fail;
    }
    inpt_answer.value = "";
    inpt_answer.focus();
});
