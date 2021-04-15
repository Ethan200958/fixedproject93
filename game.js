

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

true_answer = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

function send() {
    number_1 = document.getElementById("num1").value; //setting number_1 to the current value of num1
    number_2 = document.getElementById("num2").value;
    true_answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>"+ number_1 + " X " + number_2 +"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == true_answer) {
        if(answer_turn == "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            answer_turn = "player1";
            question_turn = "player2";
        }
        else {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            answer_turn = "player2";
            question_turn = "player1";
        }
    }

    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML  = "Question turn - " + player2_name;
    }
    else if(question_turn == "player2") {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML  = "Question turn - " + player1_name;
    }

    if(answer_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_answer").innerHTML  = "Answer turn - " + player2_name;
    }
    else if(answer_turn == "player2") {
        question_turn = "player1";
        document.getElementById("player_answer").innerHTML  = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}