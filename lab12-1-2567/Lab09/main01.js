function dfs(G, start, visited = {}) {
    console.log(`visit ${start}`);
    visited[start] = true;
  
    for (let neighbor of G[start]) {
      if (!visited[neighbor]) {
        dfs(G, neighbor, visited);
      }
    }
  }
  
  const G = {};
  const V = 7;
  for (let i = 0; i < V; ++i) {
    G[i] = [];
  }
  G[0].push(1);
  G[0].push(2);
  G[1].push(6);
  G[2].push(3);
  G[2].push(4);
  G[4].push(5);
  
  dfs(G, 0);
