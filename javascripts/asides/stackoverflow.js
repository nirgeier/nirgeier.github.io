/**
 * Execute api calls to stack overflow
 */

var SO = (function(){

    function getTopUsers() {

        var url = "https://api.stackexchange.com/2.2/users/1755598/answers?" +
            "pagesize=5&order=desc&sort=votes&site=stackoverflow",
            fragment;

        // Load the users list
        $.getJSON(url, function (data) {

            // Check to see if we got data back
            if (data){

                /*


                {
                    "items": [
                    {
                        "owner": {
                            "reputation": 16883,
                            "user_id": 1755598,
                            "user_type": "registered",
                            "profile_image": "https://i.stack.imgur.com/S6a50.jpg?s=128&g=1",
                            "display_name": "CodeWizard",
                            "link": "http://stackoverflow.com/users/1755598/codewizard"
                        },
                        "is_accepted": true,
                        "score": 46,
                        "last_activity_date": 1461930903,
                        "last_edit_date": 1461930903,
                        "creation_date": 1451426172,
                        "answer_id": 34519716,
                        "question_id": 34519665
                    },

                */
            }

        });

    }

    return {
        getTopUsers: getTopUsers
    }

})();


