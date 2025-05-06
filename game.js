function startGame() {
	//Stop listening after first keypress
	document.removeEventListener('keydown', startGame);
	const title = document.getElementById('title-screen');
	const game = document.getElementById('game-screen');
	
	void title.offsetWidth;
	
	// Fade out title screen
	title.classList.remove('show');
	title.classList.add('invisible');
	
	// Fade in game screen
	setTimeout(() => {
		game.classList.remove('invisible');
		game.classList.add('show');    
	}, 2000);
}

// Listen for a keypress
document.addEventListener('keydown',startGame);