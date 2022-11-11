const docOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users API",
            version: "1.0.0",
            description: "User API relaed to user",
            contact:{
                name:"Magic Developers",
                url:"https:",
                email:"hammadhameed956@gmail.com"
            }
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
            {
                url: "https://online_server:5000/"
            }
        ],
    },
    apis: ["./routes/*.js"] //problem here
}

module.exports = {

    docOptions
}