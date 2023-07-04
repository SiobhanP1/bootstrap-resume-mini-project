function fetchGithubInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("gh-user-data").html(`<h2>Please enter a Github username.</h2>`);
    }
    return;
}