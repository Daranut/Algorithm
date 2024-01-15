// กำหนดตารางขนาด n × m มาให้ (grid[n][m]) โดยแต่ละช่องมีค่าเป็น . (เดินผ่านได้) หรือ # (มีสิ่งกีดขวาง) 
// จงนับจำนวนวิธีเดินจากมุมบนซ้าย (ตำแหน่ง (1, 1)) มาถึงมุมล่างขวา (ตำแหน่ง (n, m)) 
// โดยอนุญาตให้เดินลงหรือขวาเท่านั้น (ห้ามเดินขึ้นหรือซ้าย)

// Return จำนวนวิธีเดินที่เป็นไปได้ทั้งหมด (เป็นตัวเลข)

function countPaths(grid) {
    const n = grid.length;
    const m = grid[0].length;
  
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    dp[0][0] = 1;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === '#') continue;
  
        if (i > 0) dp[i][j] += dp[i - 1][j];
        if (j > 0) dp[i][j] += dp[i][j - 1];
      }
    }
  
    return dp[n - 1][m - 1];
  }
  
  const input = [
    [".", ".", ".", ".", "."],
    [".", "#", ".", ".", "."],
    [".", ".", ".", "#", "."],
    [".", ".", ".", "#", "."]
  ];
  
  console.log(countPaths(input));
  
  