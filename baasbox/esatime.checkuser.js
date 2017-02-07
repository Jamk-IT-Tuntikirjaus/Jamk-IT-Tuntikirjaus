http().post(function(req) {
    try {
        if (!req.body.username) return {
            status: 400,
            content: "no username in query"
        };

        var username = req.body.username;
        Box.log(username);
        var result = Box.Users.find(username);
        Box.log(result);

        if (result == null) return {
            status: 404,
            content: "no user found"
        }
        else {
            return {
                status: 200,
                content: "user found"
            }
        }
    } catch (error) {
        Box.log("Error:", error)
        return {
            status: 500,
            content: error
        }
    }
});
