export default function findNeighbors (x, y, width, height) {
	
  	const neighbors = [] ; 
    const x_offset = [-1, -1, -1, 0, 0, 1, 1, 1];
  	const y_offset = [-1, 0, 1, -1, 1, -1, 0, 1];
  	let neighborX, neighborY;
  
  	for (let i = 0; i< 8; i++) {
  		neighborX = x + x_offset[i];
  		neighborY = y + y_offset[i];
    
    	if (
    		neighborX >= 0 
    		&& neighborX <= (width - 1) 
        	&& neighborY >= 0 
        	&& neighborY <= (height - 1)
    	) {
    		neighbors.push([neighborX, neighborY]);
    	}
 	}
  	return neighbors;
}