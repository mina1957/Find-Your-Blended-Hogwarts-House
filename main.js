'Use strict mode'
function refreshPage() {
    window.location.reload();
}

function check() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;

    function incrementor(val) {
        if (val == 'rv') {
            rave++;
        }
        if (val == 'hf') {
            huff++;
        }
        if (val == 'sl') {
            slyth++;
        }
        if (val == 'gr') {
            gryf++;
        }
        return;
    }

    function twoGreatest(gryf, slyth, rave, huff) {
        var houses = [];
        maximum = Math.max(gryf, slyth, rave, huff);
        if (maximum === gryf) {
            houses.push("gryff");
            maximum = Math.max(slyth, rave, huff);
            if (maximum === slyth) {
                houses.push("rin");
                return houses;
            }
            else if (maximum === rave) {
                houses.push("claw");
                return houses;
            }
            else if (maximum === huff) {
                houses.push("puff");
                return houses;
            }
        }
        else if (maximum === slyth) {
            houses.push("slyther");
            maximum = Math.max(gryf, rave, huff);
            if (maximum === gryf) {
                houses.push("indor");
                return houses;
            }
            else if (maximum === rave) {
                houses.push("claw");
                return houses;
            }
            else if (maximum === huff) {
                houses.push("puff");
                return houses;
            }
        } else if (maximum === huff) {
            houses.push("huffle");
            maximum = Math.max(slyth, rave, gryf);
            if (maximum === slyth) {
                houses.push("rin");
                return houses;
            }
            else if (maximum === rave) {
                houses.push("claw");
                return houses;
            }
            else if (maximum === gryf) {
                houses.push("indor");
                return houses;
            }
        } else if (maximum === rave) {
            houses.push("raven");
            maximum = Math.max(slyth, gryf, huff);
            if (maximum === slyth) {
                houses.push("rin");
                return houses;
            }
            else if (maximum === gryf) {
                houses.push("indor");
                return houses;
            }
            else if (maximum === huff) {
                houses.push("puff");
                return houses;
            }
        }

    }


    var gryf = 0;
    var slyth = 0;
    var rave = 0;
    var huff = 0;

    incrementor(q1);
    incrementor(q2);
    incrementor(q3);
    incrementor(q4);
    incrementor(q5);
    incrementor(q6);
    incrementor(q7);
    incrementor(q8);
    incrementor(q9);
    incrementor(q10);

    var sum = gryf + slyth + rave + huff;

    if (sum < 10) {
        alert("Respond to all questions !!");
        refreshPage();
        window.scrollBy(0, -800);
    }



    var houses = twoGreatest(gryf, slyth, rave, huff);


    document.getElementById("after sort").style.visibility = "visible";
    document.getElementById("blended house").innerHTML = "Your blended house iiiis...🥁:\n" + houses[0][0].toUpperCase() + houses[0].slice(1) + "-" + houses[1][0].toUpperCase() + houses[1].slice(1)+ ". FYI: Your most prominent house was placed first in the name ;)!";

    window.scrollBy(0, 800);

}
