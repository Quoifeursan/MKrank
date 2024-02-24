function submitForm() {
  var pseudo = document.getElementById("pseudo").value;
  var score = parseInt(document.getElementById("score").value);

  var rank, imageName, pointsToNext, pointsToDowngrade;

  if (score >= 0 && score <= 329) {
      rank = "Bronze 1";
      imageName = "Bronze 1.png";
      pointsToNext = 330 - score;
      pointsToDowngrade = score;
  } else if (score >= 330 && score <= 659) {
      rank = "Bronze 2";
      imageName = "Bronze 2.png";
      pointsToNext = 660 - score;
      pointsToDowngrade = score - 329;
  } else if (score >= 660 && score <= 999) {
      rank = "Bronze 3";
      imageName = "Bronze 3.png";
      pointsToNext = 1000 - score;
      pointsToDowngrade = score - 659;
  }
  else if (score >= 1000 && score <= 1329) {
    rank = "Argent 1";
    imageName = "Argent 1.png";
    pointsToNext = 1330 - score;
    pointsToDowngrade = score - 999;
} else if (score >= 1330 && score <= 1659) {
    rank = "Argent 2";
    imageName = "Argent 2.png";
    pointsToNext = 1660 - score;
    pointsToDowngrade = score - 1329;
} else if (score >= 1660 && score <= 1999) {
    rank = "Argent 3";
    imageName = "Argent 3.png";
    pointsToNext = 2000 - score;
    pointsToDowngrade = score - 1659;
} else if (score >= 2000 && score <= 2599) {
    rank = "Or 1";
    imageName = "Or 1.png";
    pointsToNext = 2600 - score;
    pointsToDowngrade = score - 1999;
} else if (score >= 2600 && score <= 3299) {
    rank = "Or 2";
    imageName = "Or 2.png";
    pointsToNext = 3300 - score;
    pointsToDowngrade = score - 2599;
} else if (score >= 3300 && score <= 3999) {
    rank = "Or 3";
    imageName = "Or 3.png";
    pointsToNext = 4000 - score;
    pointsToDowngrade = score - 3299;
}
else if (score >= 4000 && score <= 4999) {
  rank = "Platine 1";
  imageName = "Platine 1.png";
  pointsToNext = 5000 - score;
  pointsToDowngrade = score - 3999;
} else if (score >= 5000 && score <= 5999) {
  rank = "Platine 2";
  imageName = "Platine 2.png";
  pointsToNext = 6000 - score;
  pointsToDowngrade = score - 4999;
} else if (score >= 6000 && score <= 6999) {
  rank = "Platine 3";
  imageName = "Platine 3.png";
  pointsToNext = 7000 - score;
  pointsToDowngrade = score - 5999;
} else if (score >= 7000 && score <= 7999) {
  rank = "Diamant 1";
  imageName = "Diamant 1.png";
  pointsToNext = 8000 - score;
  pointsToDowngrade = score - 6999;
} else if (score >= 8000 && score <= 8999) {
  rank = "Diamant 2";
  imageName = "Diamant 2.png";
  pointsToNext = 9000 - score;
  pointsToDowngrade = score - 7999;
} else if (score >= 9000 && score <= 9999) {
  rank = "Diamant 3";
  imageName = "Diamant 3.png";
  pointsToNext = 10000 - score;
  pointsToDowngrade = score - 8999;
} else if (score >= 10000 && score <= 11499) {
  rank = "Emeraude 1";
  imageName = "Emeraude 1.png";
  pointsToNext = 11500 - score;
  pointsToDowngrade = score - 9999;
} else if (score >= 11500 && score <= 12999) {
  rank = "Emeraude 2";
  imageName = "Emeraude 2.png";
  pointsToNext = 13000 - score;
  pointsToDowngrade = score - 11499;
} else if (score >= 13000 && score <= 14999) {
  rank = "Emeraude 3";
  imageName = "Emeraude 3.png";
  pointsToNext = 15000 - score;
  pointsToDowngrade = score - 12999;
} else if (score >= 15000 && score <= 17999) {
  rank = "Rubis 1";
  imageName = "Rubis 1.png";
  pointsToNext = 18000 - score;
  pointsToDowngrade = score - 14999;
} else if (score >= 18000 && score <= 20999) {
  rank = "Rubis 2";
  imageName = "Rubis 2.png";
  pointsToNext = 21000 - score;
  pointsToDowngrade = score - 17999;
} else if (score >= 21000 && score <= 24999) {
  rank = "Rubis 3";
  imageName = "Rubis 3.png";
  pointsToNext = 25000 - score;
  pointsToDowngrade = score - 20999;
} else if (score >= 25000 && score <= 27999) {
  rank = "Saphir 1";
  imageName = "Saphir 1.png";
  pointsToNext = 28000 - score;
  pointsToDowngrade = score - 24999;
} else if (score >= 28000 && score <= 30999) {
  rank = "Saphir 2";
  imageName = "Saphir 2.png";
  pointsToNext = 31000 - score;
  pointsToDowngrade = score - 27999;
} else if (score >= 31000 && score <= 34999) {
  rank = "Saphir 3";
  imageName = "Saphir 3.png";
  pointsToNext = 35000 - score;
  pointsToDowngrade = score - 30999;
} else if (score >= 35000 && score <= 39999) {
  rank = "Topaz 1";
  imageName = "Topaz 1.png";
  pointsToNext = 40000 - score;
  pointsToDowngrade = score - 34999;
} else if (score >= 40000 && score <= 44999) {
  rank = "Topaz 2";
  imageName = "Topaz 2.png";
  pointsToNext = 45000 - score;
  pointsToDowngrade = score - 39999;
} else if (score >= 45000 && score <= 49999) {
  rank = "Topaz 3";
  imageName = "Topaz 3.png";
  pointsToNext = 50000 - score;
  pointsToDowngrade = score - 44999;
} else if (score >= 50000 && score <= 59999) {
  rank = "Amethyste 1";
  imageName = "Amethyste 1.png";
  pointsToNext = 60000 - score;
  pointsToDowngrade = score - 49999;
} else if (score >= 60000 && score <= 74999) {
  rank = "Amethyste 2";
  imageName = "Amethyste 2.png";
  pointsToNext = 75000 - score;
  pointsToDowngrade = score - 59999;
} else if (score >= 75000 && score <= 89999) {
  rank = "Amethyste 3";
  imageName = "Amethyste 3.png";
  pointsToNext = 90000 - score;
  pointsToDowngrade = score - 74999;
} else if (score >= 90000) {
  rank = "Legend";
  imageName = "Legend.png";
  pointsToNext = 0;  // No more points to the next rank
  pointsToDowngrade = score - 89999;
}







  // Displaying the result in the modal
  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "<p>Pseudo: " + pseudo + "</p>" +
      "<p>Score: " + score + "</p>" +
      "<p>Rank: " + rank + "</p>" +
      "<img src='res/rank/" + imageName + "' alt='" + rank + "'>" +
      "<p><span style='color: green;'> ▲" + pointsToNext + "</span></p>" +
      "<p><span style='color: red;'>▼" + pointsToDowngrade + "</p>";

  // Displaying the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
