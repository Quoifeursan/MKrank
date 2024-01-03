// Fonction pour obtenir le score minimum du rang précédent
function getPreviousRankMinScore(rankName) {
    switch (rankName.toLowerCase()) {
      case 'bronze': return 0;
      case 'silver': return 1001;
      case 'gold': return 2001;
      case 'platine': return 4001;
      case 'diamond': return 7001;
      case 'emerald': return 10001;
      case 'ruby': return 15001;
      case 'sapphire': return 25001;
      case 'topaz': return 35001;
      case 'amethyst': return 50001;
      default: return 0;
    }
  }
  
  // Fonction pour obtenir le score minimum du rang suivant
  function getNextRankMinScore(rankName) {
    switch (rankName.toLowerCase()) {
      case 'bronze': return 1000;
      case 'silver': return 2000;
      case 'gold': return 4000;
      case 'platine': return 7000;
      case 'diamond': return 10000;
      case 'emerald': return 15000;
      case 'ruby': return 25000;
      case 'sapphire': return 35000;
      case 'topaz': return 50000;
      case 'amethyst': return 99999;
      default: return 0;
    }
  }
  


  
  
  
  // Fonction pour obtenir le nom du rang en fonction du score
  function getRankName(score) {
    if (score <= 1000) return 'Bronze';
    else if (score <= 2000) return 'Silver';
    else if (score <= 4000) return 'Gold';
    else if (score <= 7000) return 'Platine';
    else if (score <= 10000) return 'Diamond';
    else if (score <= 15000) return 'Emerald';
    else if (score <= 25000) return 'Ruby';
    else if (score <= 35000) return 'Saphir';
    else if (score <= 50000) return 'Topaz';
    else return 'amethyst';
  }
  
  // Fonction pour obtenir l'image du rang en fonction du score
  function getRankImage(score) {
    var rankName = getRankName(score);
    return `rank/${rankName.toLowerCase()}.png`;
  }
  
  // Fonction pour obtenir l'emoji du drapeau en fonction du code du pays
  function getFlagEmoji(countryCode) {
    // Ajoutez le code pour obtenir l'emoji du drapeau en fonction du code du pays
    // Par exemple, vous pouvez utiliser une bibliothèque comme "flag-icon-css"
  }
  

  function submitForm() {
    var pseudo = document.getElementById('pseudo').value;
    var score = document.getElementById('score').value;
    //var pays = document.getElementById('pays').value;
    //var perso = document.getElementById('perso').value;

    // Vérifier que le score est entre 0 et 99999
    if (score >= 0 && score <= 99999) {
        // Récupérer l'élément de la boîte modale
        var modal = document.getElementById('myModal');

        // Récupérer l'élément d'affichage
        var modalContent = document.getElementById('modalContent');

        // Calculer le rang en fonction du score
        var rankImage = getRankImage(score);

        // Calculer le rang précédent et suivant
        var currentRank = getRankName(score);
        var previousRank = getRankName(Math.max(0, score - 1));
        var nextRank = getRankName(Number(score) + 1);

        var previousRankMinScore = getPreviousRankMinScore(previousRank);
        var nextRankMinScore = getNextRankMinScore(nextRank);

        modalContent.innerHTML = `
          <p><strong>Pseudo:</strong> ${pseudo}</p>
          <p><strong>Score:</strong> ${score}</p>
          <!---->
          <p><strong>Rang:</strong> ${currentRank}</p>
          <p style="color: red;">▼ ${score - previousRankMinScore}</p>
          <p style="color: green;">▲ ${nextRankMinScore - score}</p>
          <img src="${rankImage}" alt="Image du rang" width="100" height="100">
        `;
        //<p><strong>Pays:</strong> ${pays}</p>
          //<p><strong>Personnage:</strong> ${perso}</p>

        // Afficher la boîte modale
        modal.style.display = 'block';
    } else {
        // Afficher un message d'erreur pour le score
        alert('Le score doit être compris entre 0 et 99999.');
    }
}