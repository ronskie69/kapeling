const postData = async (data) => {
    try {
       let req = await fetch('https://roberts.com.ph:8090/forms/amendment/api/post_request.php',
        {
            headers : {
                'Content-type' : 'text/plain, application/json',
                'Accept' : 'text/plain, application/json'
            },
            credentials: true,
            method: 'POST',
            data
        })

        return await req
    } catch (error) {
        throw new Error(error)
    }
}

postData.prototype.getData  = function () {
    return this
}
