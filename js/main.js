//data
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var htmlBuilder = "";
htmlBuilder = '<table><tr><th>Team</th><th>Wins</th><th>Losses</th></tr>'; //starting to make table + making table headings

var highestWins = 0; //variable that stores highest win value

for (var i=0; i<teams.length; i++){ //determines index in wins array that has the highest win value
    if (highestWins < wins[i]){
        console.log("entered if statement");
        highestWins = wins[i];
    }
    console.log(highestWins);
    
    var winner = wins.indexOf(highestWins); //identifies the index of variable highestWins (the highest win value)

    // alt:
    // var tempHighWins = 0; //but declare this outside of for loop
    // var tempLeader = 0; //declare outside of for loop
    // if(wins[i] >= tempHighWins){
    //     tempHighWins = wins[i];
    //     tempLeader = i;
    // }
    //
    // so in the next for loop, if statemente would be if (w == tempLeader)
};

for (var i=0; i<teams.length; i++){ //creating table rows by looping through each index in the teams array

    if (winner == i){ //bolding the team with the highest number of wins
        htmlBuilder += `<tr><td><strong>${teams[i]}</strong></td><td>${wins[i]}</td><td>${losses[i]}</td></tr>`;   

        // alt: //instead of bolding it through JS, put the leader within a span class and style it within CSS
        // htmlBuilder += `<tr><td><span id="leader">${teams[i]}</span></td><td>${wins[i]}</td><td>${losses[i]}</td></tr>`;   
    }
    else {
        htmlBuilder += `<tr><td>${teams[i]}</td><td>${wins[i]}</td><td>${losses[i]}</td></tr>`;
    }
};

htmlBuilder += '</table>'; //closing table tag, ending it

document.getElementById("table").innerHTML = htmlBuilder;


