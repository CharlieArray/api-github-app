//Documentation to search for user by user handle
//https://docs.github.com/en/free-pro-team@latest/rest/reference/users

//Documentation to serach for user by actual name
//https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-users

//Documentaation to list repos of a user
//https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repositories-for-a-user



//function to displayuserData
function displayuserData(){
//probably convert json string to object (do that in getUser function)
//pass in json responseJson as parameter?
//Need to push name of Repo
//Need to push hyperlink to Repo
}


//function to get userData 
function getUserData(){
    //define variables to string concatenate GET URL request for 
    let url = 'https://api.github.com/users/';
    let username = $('#user').val()
    let repos = "/repos";
    let urlRequest = url+username+repos;

    fetch(urlRequest)
    .then(response=>response.json())
    .then(responseJson => console.log(responseJson))
    .catch(console.error('error occured'))
}


//event listener function watchForm for form submit
function watchForm(){
    $('#submit').click(event=>{
        event.preventDefault();
        getUserData();
        console.log('button clicked');
        console.log("fetching data for username: "+$('#user').val());
    });
}

watchForm();