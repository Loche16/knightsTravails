function knightMoves([x, y], [xf, yf]){
    if(x >= 8 || x < 0 || y >= 8 || y < 0 || xf >= 8 || xf < 0 || yf >= 8 || yf < 0) return "You have to input the coordinates(0-7) of the starting and ending position of the knight. For example: knightMoves([2,2],[4,4])"
    const dx = [-2, -1, 1, 2, -2, -1, 1, 2]
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1]

    const queue = []
    queue.push([[x, y]])

    const visited = []
    visited.push([x, y])

    while(queue.length){
        const path = queue.shift()
        const node = path[path.length - 1]

        if(node[0] === xf && node[1] === yf){
            return path
        }
        for(i = 0; i < 8; i++){
            let nx = node[0] + dx[i]
            let ny = node[1] + dy[i]

            if(nx < 8 && nx >= 0 && ny < 8 && ny >= 0 && !visited.includes([nx, ny])){
                visited.push([nx, ny])
                queue.push([...path, [nx, ny]])
            }
        }
        
    }
}

console.log(knightMoves([2,2], [4,4]))
console.log(knightMoves([2,2], [8,7]))