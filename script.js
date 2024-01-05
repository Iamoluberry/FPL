// Footballer object constructor
function footballer(name, club, nationality, position, value) {
    this.name = name;
    this.club = club;
    this.nationality = nationality;
    this.position = position;
    this.value = value;
}


    let FPL = {
        budget: 200,
        forwardCount: 0,
        midfielderCount: 0,
        defenderCount:  0,
        goalkeeperCount: 0,
        userPicks: [],
        playerContainer: [
            new footballer('Haaland', 'Manchester City', 'Norway', 'Forward', 27.8),
            new footballer('Watkins', 'Aston Villa', 'England', 'Forward', 17.6),
            new footballer('Jesus', 'Arsenal', 'Brazil', 'Forward', 16.0),
            new footballer('Toney', 'Brentford', 'Norway', 'Forward', 15.8),
            new footballer('Wilson', 'Newscastle United', 'England', 'Forward', 15.6),
            new footballer('Isak', 'Newscastle United', 'Sweden', 'Forward', 15.2),
            new footballer('Darwin', 'Liverpool', 'Uruguay', 'Forward', 15.0),
            new footballer('Nkunku', 'Chelsea', 'France', 'Forward', 14.8),
            new footballer('Gakpo', 'Liverpool', 'Netherland', 'Forward', 14.4),
            new footballer('Solanke', 'Bournemouth', 'England', 'Forward', 14.2),
            new footballer('Alvarez', 'Manchester City', 'Argentina', 'Forward', 13.8),
            new footballer('Jackson', 'Chelsea', 'Senegal', 'Forward', 13.8),
            new footballer('Hojlund', 'Manchester United', 'Denmark', 'Forward', 13.6),
            new footballer('Martial', 'Manchester United', 'France', 'Forward', 12.8),
            new footballer('Awoniyi', 'Nottingham Forest', 'Nigeria', 'Forward', 12.3),
            new footballer('Ferguson', 'Brighton', 'Ireland', 'Forward', 11.8),
            new footballer('Calvert-Lewin', 'Everton', 'England', 'Forward', 11.6),
            new footballer('Cunha', 'Wolves', 'Brazil', 'Forward', 11.6),
            new footballer('Antonio', 'Westham', 'Jamaica', 'Forward', 11.4),
            new footballer('Welbeck', 'Brighton', 'England', 'Forward', 11.4),
            new footballer('Wissa', 'Brentford', 'Dr Congo', 'Forward', 11.4),
            new footballer('Ings', 'Westham', 'England', 'Forward', 11.2),
            new footballer('Nketiah', 'Arsenal', 'England', 'Forward', 10.6),
            new footballer('Broja', 'Chelsea', 'Albania', 'Forward', 9.8),
            new footballer('Maupay', 'Brentford', 'Argentine', 'Forward', 9.8),
            new footballer('Fraser', 'Wolves', 'Denmark', 'Forward', 9.0),
            new footballer('Shoretire', 'Manchester United', 'England', 'Forward', 8.8),
            
    
            new footballer('Salah', 'Liverpool', 'Egypt', 'Midfielder', 26.6),
            new footballer('DeBruyne', 'Manchester City', 'Belgium', 'Midfielder', 20.4),
            new footballer('Son', 'Tottenham', 'South Korea', 'Midfielder', 19.8),
            new footballer('Saka', 'Arsenal', 'England', 'Midfielder', 18.0),
            new footballer('Rashford', 'Manchester United', 'England', 'Midfielder', 16.8),
            new footballer('Odegaard', 'Arsenal', 'Norway', 'Midfielder', 16.8),
            new footballer('Bruno', 'Manchester United', 'Portugal', 'Midfielder', 16.4),
            new footballer('Bowen', 'Westham', 'England', 'Midfielder', 15.8),
            new footballer('Jota', 'Liverpool', 'Portugal', 'Midfielder', 15.4),
            new footballer('Foden', 'Manchester City', 'England', 'Midfielder', 15.4),
            new footballer('Martinelli', 'Arsenal', 'Brazil', 'Midfielder', 15.4),
            new footballer('Diaz', 'Liverpool', 'Colombia', 'Midfielder', 14.6),
            new footballer('Grealish', 'Manchester City', 'England', 'Midfielder', 14.4),
            new footballer('Kulusevski', 'Tottenham', 'Sweden', 'Midfielder', 14.4),
            new footballer('Havertz', 'Arsenal', 'Germany', 'Midfielder', 14.2),
            new footballer('Sterling', 'Chelsea', 'England', 'Midfielder', 14.2),
            new footballer('Szoboszlai', 'Liverpool', 'Hungary', 'Midfielder', 14.2),
            new footballer('Kudus', 'Westham', 'Ghana', 'Midfielder', 13.8),
            new footballer('Antony', 'Manchester United', 'Brazil', 'Midfielder', 13.6),
            new footballer('Mbeumo', 'Brentford', 'Cameroon', 'Midfielder', 13.6),
            new footballer('Mount', 'Manchester United', 'England', 'Midfielder', 13.6),
            new footballer('Richarlison', 'Tottenham', 'Brazil', 'Midfielder', 13.6),
            new footballer('Bernardo', 'Manchester City', 'Portugal', 'Midfielder', 13.0),
            new footballer('Doku', 'Manchester City', 'Belgium', 'Midfielder', 13.0),
            new footballer('Trossard', 'Arsenal', 'Belgium', 'Midfielder', 13.0),
            new footballer('Mitoma', 'Brighton', 'Japan', 'Midfielder', 13.0),
            new footballer('Fati', 'Brighton', 'Spain', 'Midfielder', 12.8),
            new footballer('Mudryk', 'Chelsea', 'Ukraine', 'Midfielder', 12.6),
            new footballer('Almiron', 'Newcastle United', 'Paraguay', 'Midfielder', 12.4),
            new footballer('Paqueta', 'Westham', 'Brazil', 'Midfielder', 12.0),
            new footballer('Ward-Prowse', 'Westham', 'England', 'Midfielder', 12.0),
            new footballer('Eriksen', 'Manchester United', 'Denmark', 'Midfielder', 11.8),
            new footballer('Allister', 'Liverpool', 'Argentina', 'Midfielder', 11.8),
            
    
            new footballer('Arnold', 'Liverpool', 'England', 'Defender', 16.8),
            new footballer('Trippier', 'Newcastle United', 'England', 'Defender', 13.6),
            new footballer('Robertson', 'Liverpool', 'Scotland', 'Defender', 12.8),
            new footballer('Virgil', 'Liverpool', 'Netherland', 'Defender', 12.4),
            new footballer('Saliba', 'Arsenal', 'France', 'Defender', 11.2),
            new footballer('White', 'Arsenal', 'England', 'Defender', 11.2),
            new footballer('Ruben', 'Manchester City', 'Portugal', 'Defender', 11.0),
            new footballer('Chilwell', 'Chelsea', 'England', 'Defender', 10.8),
            new footballer('James', 'Chelsea', 'England', 'Defender', 10.6),
            new footballer('schar', 'Newcastle United', 'Switzerland', 'Defender', 10.6),
            new footballer('Walker', 'Manchester City', 'England', 'Defender', 10.6),
            new footballer('Stones', 'Manchester City', 'England', 'Defender', 10.6),
            new footballer('Shaw', 'Manchester United', 'England', 'Defender', 10.4),
            new footballer('Zinchenko', 'Arsenal', 'Ukraine', 'Defender', 10.4),
            new footballer('Dalot', 'Manchester United', 'Portugal', 'Defender', 10.2),
            new footballer('Ake', 'Manchester City', 'Netherland', 'Defender', 10.0),
            new footballer('Dunk', 'Brighton', 'England', 'Defender', 10.0),
            new footballer('Gabriel', 'Arsenal', 'Brazil', 'Defender', 10.0),
            new footballer('Romero', 'Tottenham', 'Argentina', 'Defender', 10.0),
            new footballer('Silva', 'Chelsea', 'Brazil', 'Defender', 10.0),
            new footballer('Akanji', 'Manchester City', 'Switzerland', 'Defender', 9.8),
            new footballer('Estupinan', 'Brighton', 'Ecuador', 'Defender', 9.8),
            new footballer('Konate', 'Liverpool', 'France', 'Defender', 9.8),
            new footballer('Matip', 'Liverpool', 'Cameroon', 'Defender', 9.8),
            new footballer('Varane', 'Manchester United', 'France', 'Defender', 9.8),
            new footballer('Cucurella', 'Chelsea', 'Spain', 'Defender', 9.6),
            new footballer('Gvardiol', 'Manchester City', 'Croatia', 'Defender', 9.6),
           
    
    
            new footballer('Allison', 'Liverpool', 'Brazil', 'Goalkeeper', 11.2),
            new footballer('Ederson', 'Manchester City', 'Brazil', 'Goalkeeper', 11.0),
            new footballer('Pope', 'Newcastle United', 'England', 'Goalkeeper', 10.8),
            new footballer('Vicario', 'Tottenham', 'Italy', 'Goalkeeper', 10.6),
            new footballer('Martinez', 'Aston Villa', 'Argentina', 'Goalkeeper', 10.2),
            new footballer('Raya', 'Arsenal', 'Spain', 'Goalkeeper', 9.8),
            new footballer('Leno', 'Fulham', 'Germany', 'Goalkeeper', 9.0),
            new footballer('Onana', 'Manchester United', 'Cameroon', 'Goalkeeper', 9.6),
            new footballer('Neto', 'Bournemouth', 'Brazil', 'Goalkeeper', 9.2),
            
        ],
    
        displayAvailablePlayers: function () {
            const tableBody = document.querySelector('#availablePlayersTable tbody');
            tableBody.innerHTML = ''; // Clear existing table content
        
            this.playerContainer.forEach((player, index) => {
              const row = tableBody.insertRow();
              row.insertCell(0).textContent = index + 1;
              row.insertCell(1).textContent = player.name;
              row.insertCell(2).textContent = player.club;
              row.insertCell(3).textContent = player.nationality;
              row.insertCell(4).textContent = player.position;
              row.insertCell(5).textContent = `£${player.value.toFixed(2)  + 'M'}`;
              row.insertCell(6).appendChild(this.renderAddButton(index))
            });
          },


          //function for the sign player button
          renderAddButton: function (index) {
            let buyButton = document.createElement('button');
            buyButton.innerHTML = 'Sign Player';
            //add css to the button
            buyButton.classList.add('button-85');
        
            buyButton.onclick = function () {

                FPL.addUserPicks(index);
                FPL.displayUserTeam();
                FPL.displayUserPicks();
            };
            return buyButton;
        },
        

        addUserPicks: function (playerindex){
            let userPick = this.playerContainer[playerindex];

            // Check if the player is already in the user team; more readbility and more lines of codes
            let newarr = this.userPicks.map(avoidRepetition);

            function avoidRepetition(player){
                return player.name
            }

            if(newarr.includes(userPick.name)){
                alert(`${userPick.name} is already in your team.`);
                return false
            }


            // Check if the player is already in the user team; interpreted in the lines of codes above
            // if (this.userPicks.map(player => player.name).includes(userPick.name)) {
            //     alert(`${userPick.name} is already in your team.`);
            //     return false;
            //   }
            

            if (this.budget >= userPick.value) {
    
                if (userPick.position === "Forward") {
                    if (this.forwardCount < 3) {
                      // Add the player to the user team
                      this.userPicks.push(userPick);
                      this.budget -= userPick.value;
                      this.forwardCount++;
                      alert(`${userPick.name} added to your team!`);
                    } else {
                      console.log(`You can't have more than three forwards in your team.`);
                      alert(`You can't have more than three forwards in your team.`)
                      return false;
                    }
                  }
    
                  if (userPick.position === "Midfielder") {
                    if (this.midfielderCount < 5) {
                      // Add the player to the user team
                      this.userPicks.push(userPick);
                      this.budget -= userPick.value;
                      this.midfielderCount++;
                      alert(`${userPick.name} added to your team!`);
                    } else {
                      console.log(`You can't have more than five midfielder in your team.`);
                      alert(`You can't have more than five midfielder in your team.`)
                      return false;
                    }
                  } 
    
                  if (userPick.position === "Defender") {
                    if (this.defenderCount < 5) {
                      // Add the player to the user team
                      this.userPicks.push(userPick);
                      this.budget -= userPick.value;
                      this.defenderCount++;
                      alert(`${userPick.name} added to your team!`);
                    } else {
                      console.log(`You can't have more than five defender in your team.`);
                      alert(`You can't have more than five defender in your team.`)
                      return false;
                    }
                  } 
    
                  if (userPick.position === "Goalkeeper") {
                    if (this.goalkeeperCount < 2) {
                      // Add the player to the user team
                      this.userPicks.push(userPick);
                      this.budget -= userPick.value;
                      this.goalkeeperCount++;
                      alert(`${userPick.name} added to your team!`);
                    } else {
                      console.log(`You can't have more than two goalkeeper in your team.`);
                      alert(`You can't have more than two goalkeeper in your team.`)
                      return false;
                    }
                  } 
                  
                  return true; // Player successfully added
                } else {
                  console.log(`Not enough budget to add ${userPick.name}`);
                  alert(`Not enough budget to add ${userPick.name}`)
                  return false; // Player not added due to insufficient budget
                }
              },
    
        displayUserTeam: function () {
            for (const player of this.userPicks) {
                console.log(`You've signed ${player.name}, the ${player.position} plays for ${player.club} and he is from ${player.nationality}.`)
            }
            console.log(`Budget left = ${this.budget}`);
            document.getElementById('budgetLabel').innerHTML = `Budget left = £${this.budget.toFixed(2)}M`;
        },
    
        displayUserPicks: function () {

            const tableBody = document.querySelector('#selectedPlayersTable tbody');
            tableBody.innerHTML = ''; // Clear existing table content
        
            this.userPicks.forEach((player, index) => {
              const row = tableBody.insertRow();
              row.insertCell(0).textContent = index + 1; // Displaying index starting from 1
              row.insertCell(1).textContent = player.name;
              row.insertCell(2).textContent = player.club;
              row.insertCell(3).textContent = player.nationality;
              row.insertCell(4).textContent = player.position;
              row.insertCell(5).textContent = `£${player.value.toFixed(2)  + 'M'}`;
              row.insertCell(6).appendChild(this.renderDeleteButton(index))
            });
          },
        
          //function for the sell player button
          renderDeleteButton: function (index) {
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Sell Player';
            //add css to the button
            deleteButton.classList.add('button-85');
        
            deleteButton.onclick = function () {
                FPL.budget += FPL.userPicks[index].value;

                if(FPL.userPicks[index].position === 'Forward'){
                    FPL.forwardCount--;
                } else if(FPL.userPicks[index].position === 'Midfielder'){
                    FPL.midfielderCount--;
                } else if(FPL.userPicks[index].position === 'Defender'){
                    FPL.defenderCount--;
                } else if(FPL.userPicks[index].position === 'Goalkeeper'){
                    FPL.goalkeeperCount--;
                } 

                FPL.userPicks.splice(index, 1);
                FPL.displayUserTeam();
                FPL.displayUserPicks();
            };
            return deleteButton;
        },
    }

    FPL.playerContainer.sort((a, b) => {
        const positionOrder = { 'Goalkeeper': 1, 'Defender': 2, 'Midfielder': 3, 'Forward': 4 };
        return positionOrder[b.position] - positionOrder[a.position];
    });


FPL.displayAvailablePlayers();