function bfs(graph, start) {
    const visited = new Set(); 
    const queue = [start]; 
  
    while (queue.length > 0) {
      const current = queue.shift(); 
      if (!visited.has(current)) {
        console.log("visit", current);
        visited.add(current);
        graph[current].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor); 
          }
        });
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
  
  bfs(G, 0);