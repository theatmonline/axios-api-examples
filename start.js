// GET REQUEST
//function getTodos() {
//axios({
        //method: 'get',
        //url: 'https://jsonplaceholder.typicode.com/todos',
        //params: {
            //_limit: 2
        //}
    //})
        //.then(res => showOutput(res))
        //.catch(err => console.error(err));

    // Short way of doing Get Request
function getTodos() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .then(res => showOutput(res))
    .catch(err => console.error(err));

}
// POST REQUEST
function addTodo() {
 axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
             title: 'Practice Axios By Taye',
             completed: false
        }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// Short way of doing Post Request
// function addTodo() {
//     axios
//         .post('https://jsonplaceholder.typicode.com/todos', {
//             title: 'Practice Axios By Alabi Taye',
//             completed: false
//         })
//         .then(res => showOutput(res))
//         .catch(err => console.error(err));
// }

// PUT/PATCH REQUEST
// function updateTodo() {
//     axios({
//         method: 'put',
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         data: {
//             title: 'Practice Axios By Taye',
//             completed: true
//         }
//     })
//         .then(res => showOutput(res))
//         .catch(err => console.error(err));
// }
// Short way of doing Put Request
function updateTodo() {
    axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'Practice Axios By Kehinde',
        completed: true
    })
        .then (res => showOutput(res))
        .catch(err => console.log(err));
}


// DELETE REQUEST
function removeTodo() {
  axios({
    method: 'delete',
    url: 'https://jsonplaceholder.typicode.com/todos/1'
  })
  .then(res =>showOutput(res))
  .catch(err => console.log (err));
}

// SIMULTANEOUS DATA
function getData() {
 axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
 ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    // .then(res =>{
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     showOutput(res[1]);
    // })
    .catch(err =>console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Practice Axios By Taye',
      completed: false
    },
    config
  })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Jesus is Lord'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
  .get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert('Error: Page Not Found');
        }
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  axios
  .get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);