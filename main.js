function LOGIN() {
    player1_name = document.getElementById("Player1_input").value;
    player2_name = document.getElementById("Player2_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("game.html");
}