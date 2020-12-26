function CheckCollision(div1, div2) {
    // Distance around the player in pixels
    let threshold = -2;

    // Hitboxes of the two compared entities
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();
    return !(
      rect1.right < rect2.left + threshold ||
      rect1.left > rect2.right - threshold ||
      rect1.bottom < rect2.top + threshold ||
      rect1.top > rect2.bottom - threshold
    );
  }

function CheckEnnemies() {
	// Get of all the ennemies and the player
    let all_ennemies = document.querySelectorAll(".ennemy");
    let player = document.querySelector(".player");

	// Collision checking for each ennemy, with the player
	all_ennemies.forEach(function(ennemy) {
	    if (CheckCollision(player, ennemy)) {
          switch (ennemy.id)
          {
            case "james": 
              GameOver(James);
              break;
            case "jessie": 
              GameOver(Jessie)
              break;
            default: 
              GameOver(Sbire1)
          }
	    } 
	})
}
  