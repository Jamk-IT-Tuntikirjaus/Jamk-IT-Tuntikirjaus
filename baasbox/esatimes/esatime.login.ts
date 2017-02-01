http().post(function(req) {
    try {
        var salasana = req.salasana
        if (salasana.value == "salasana") {
            return { status: 200 };
        } else {
            return { status: 404 };
        }
    } catch (error) {
        return { status: 500, content: error }
    }
});
