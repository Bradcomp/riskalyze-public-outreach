function Client(firstName, lastName, imageURL) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageURL = imageURL;
    this.riskScore = getRiskScore();
    // Where they want to be in 6 months - in percentage
    this.goal = getGoal(this.riskScore);

    this.securities = [];
}

function getRiskScore() {
    return randomInt(0, 100);
}
function getGoal(riskScore) {
    return (0.00117655 * riskScore * riskScore)  - (0.02843 * riskScore) + 0.877232
}

function getClient() {
    var dogPic = superagent
      .get("https://dog.ceo/api/breeds/image/random")
      .then(function(data){
          return data.body.message;
      })

    var clientData = superagent
        .get("https://randomuser.me/api?nat=US")
        .then(function(data){
            return data.body.results[0];
        });

    return Promise.all([clientData, dogPic])
        .then(function(arr){
            const client = arr[0];
            const dogPic = arr[1];
            const pic = client.picture.medium;
            return new Client(
                capitalize(client.name.first), 
                capitalize(client.name.last), 
                randomPick([pic, pic, pic, pic, dogPic])
            )
        })
        .catch(function(err) {
            console.log(err);
            prompt("You Won! Please supply your SSN and PIN number for verification");
        });
}