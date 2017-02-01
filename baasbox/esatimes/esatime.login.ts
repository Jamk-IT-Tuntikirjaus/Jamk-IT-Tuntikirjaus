http().post(function(req) {
    try {
        var user = req.body.user
        var passwd = req.body.passwd
        if (user == "user" && passwd == "password") {
            return { status: 200 };
        } else {
          Box.log("Incorrect login")
            return { status: 404 };
        }
    } catch (error) {
      Box.log("Error:", error)
        return { status: 500, content: error }
    }
});
