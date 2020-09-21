function fetchData(url) {
  // <-- start
  fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => error);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
