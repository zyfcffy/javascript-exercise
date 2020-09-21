function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      successCallback(xhr.responseText);
    } else {
      errorCallback(xhr.statusText);
    }
  };
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
