//Documentation to search for user by user handle
//https://docs.github.com/en/free-pro-team@latest/rest/reference/users

//Documentation to serach for user by actual name
//https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-users

//Documentaation to list repos of a user
//https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repositories-for-a-user


//function to displayuserData
function displayuserData(responseJson){

console.log(responseJson)

//empty contents of results in html to clear space for new query search
$('.results-div').empty();

for (let i = 0; i < responseJson.length; i++){
 
    $('.results-div').append(
      `<li><h3>repository name: <a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
      <p>${responseJson[i].description}</p>
      </li>`
    )};
}


//function to Get Repos from searched username  
function getUserData(){
    //define variables to string concatenate GET URL request for 
    let url = 'https://api.github.com/users/';
    let username = $('#user').val()
    let repos = "/repos";
    let urlRequest = url+username+repos;

    fetch(urlRequest)
    .then(response=>response.json())
    //.then(responseJson => console.log(responseJson.length))
    .then(responseJson => displayuserData(responseJson))
    //.catch(error => console.log(error))
}


//Event listener function to listen for submit button click
function watchForm(){
    $('#submit').click(event=>{
        event.preventDefault();
        getUserData();
        console.log('button clicked');
        console.log("fetching data for username: "+$('#user').val());
    });
}

watchForm();