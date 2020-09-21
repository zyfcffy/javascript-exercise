async function fetchData(url) {
  // <-- start
  const result = await fetch(url).then(response => response.json());
  document.writeln(result.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
