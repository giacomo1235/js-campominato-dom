const eleLevel = document.getElementById('level');
const btnPlay = document.getElementById('play');
const eleGrid = document.querySelector('.grid');
const arrLevels = [100, 81, 49];

btnPlay.addEventListener('click', setupGame);


function setupGame() {
	eleGrid.innerHTML = ''; 

	const indexLevel = parseInt(eleLevel.value);
	console.log('indexLevel', indexLevel);
	const cellsCount = arrLevels[indexLevel];
	console.log('cellsCount', cellsCount);
	const cellsPerRow = Math.sqrt(cellsCount);
    

	for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
		const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		eleCell.innerHTML = cellNum;
		eleCell.style.width = `calc(100% / ${cellsPerRow})`;
		eleCell.style.height = `calc(100% / ${cellsPerRow})`;
		eleCell.addEventListener('click', changeCellColor);
		eleGrid.append(eleCell);
	}
};
 function changeCellColor(event) {
    
	this.classList.add('selected');
  	 
};


