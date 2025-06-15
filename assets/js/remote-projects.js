function get_tools(repo) {
  fetch(`https://api.github.com/repos/${repo}/topics`, {
    headers: {
      // Accept: "application/vnd.github.mercy-preview+json"
      Accept: "application/vnd.github.v3+json"
    }
  }).then(
    response => response.json()
  ).then(data => {
    var name = repo.split("/")[1];
    var parent = document.getElementById(`${name}-tools`);
    parse_tools(data.names).forEach(t => parent.appendChild(t));
  });
}

function parse_tools(tools) {
  var classes = "badge badge-pill text-primary border border-primary ml-1";
  var classesArr = classes.split(" ");
  return tools.map(tool => {
    var span = document.createElement("span");
    span.classList.add(...classesArr);
    span.innerHTML = tool;
    return span;
  });
}

function update_topics(repo) {
  const res_tools = read_rest_api(repo, "topics");
  var name = repo.split("/")[1];
  var parent = document.getElementById(`${name}-tools`);

  parse_tools(res_tools.names).forEach(t => parent.appendChild(t));
}

function update_projects_info(repo) {
  // get_social_image(repo).then((data) => {
  //   let url_img = data.data.repository.openGraphImageUrl;
  //   console.log(url_img);
  // });

  // repo = user/repo == full_name
  let user = repo.split("/")[0];
  let repo_name = repo.split("/")[1];
  
  read_rest_api(repo, "").then(data => {
    console.log(data);
  });

}

async function get_social_image(repo) {
  var user_name = repo.split("/")[0];
  var repo_name = repo.split("/")[1];
  const query =  `{repository(name: "${repo_name}", owner: "${user_name}") {openGraphImageUrl}}`;
  let response = await read_graphql_api(query);

  return await response;
}

// Lectores de los endpoints
async function read_rest_api(repo, endpoint) {
  let final_endpoint = `${repo}`;
  if(endpoint !== "") {
    final_endpoint=`${endpoint}`;
  }
  headers= {
    "Accept": "application/vnd.github.mercy-preview+json"
  };
  return await make_fetch(uri=`https://api.github.com/repos/${final_endpoint}`, query={}, headers=headers);
}

async function read_graphql_api(query, variables) {
  // communicating with the /graphql endpoint with fetch()
  let nquery = {
    query: query, 
    variables: variables
  };
  let headers= {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // TODO: Parametrizar el token en la base de datos firebase
    'Authorization': 'bearer 995e3e28abca1daae7f65b51160a61c8de42f5ef'
  };
  return await make_fetch('https://api.github.com/graphql', 'POST', nquery, headers);
}

async function make_fetch(uri, method='GET', query={}, headers={}) {
  return await fetch(uri, {
    method: method,
    headers: headers,
    body: JSON.stringify(query)
  }).then(
    r => r.json()
  ).then(data => {
    return data;
  });
}

