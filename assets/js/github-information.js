function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a Github username.</h2>`);
        return;
    }
    // Add 'loading' image file
    $("#gh-user-data").html(`<div id="loader">
    <img src="assets/images/loader.gif" alt="loading..."></div>`);
}