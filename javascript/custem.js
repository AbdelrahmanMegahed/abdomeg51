// $(`#Abdo`).attr(`Life`, `Dead`);


var score = 0; // Reset the score to 0.


// score header "Made With JQuery".
$(document).ready(function() {
    $(`#TheScore`).text(`The Score Is ` + score + ` Points.`);
})



// scoring code
function scoring() {
    $(document).ready(function() { // JQuery Code.
        score++;
        $(`#TheScore`).text(`The Score Is ` + score + ` Points.`);

        if (score == 30) { // Noob potato score.
            $(`#potato`).attr(`src`, `images/NoobPotato.gif`);
        }
        if (score == 50) { // Normal Potato score.
            $(`#potato`).attr(`src`, `images/MainPotato.gif`);
        }
        if (score == 70) { // Fire potato score.
            $(`#potato`).attr(`src`, `images/FirePotato.gif`);
        }
        if (score == 90) { // Hot potato score.
            $(`#potato`).attr(`src`, `images/HotPotato.gif`);
        }

        if (score == 110) { // Professor potato score.
            $(`#potato`).attr(`src`, `images/ProfPotato.gif`);
            $(`#potato`).css(`width`, `167px`);
            $(`#potato`).css(`height`, `168px`);
        }

        // Making the potato going to random places on our webpage.
        var mar1 = Math.random() * 50 + "%";
        var mar2 = Math.random() * 50 + "%";
        $(`#potato`).css(`margin-top`, Math.random() * 50 + "%")
        $(`#potato`).css(`margin-left`, Math.random() * 50 + "%")
    })
}