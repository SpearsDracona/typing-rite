function startGame() {
	//Stop listening after first keypress
	document.removeEventListener('keydown', startGame);
	const title = document.getElementById('title-screen');
	const game = document.getElementById('game-screen');
	
	void title.offsetWidth;
	
	// Fade out title screen
	title.classList.add('invisible');
	title.classList.remove('show');
	
	// Fade in game screen
	setTimeout(() => {
		game.classList.remove('invisible');
		game.classList.add('show');    
	}, 1000);
}

// Listen for a keypress
document.addEventListener('keydown',startGame);