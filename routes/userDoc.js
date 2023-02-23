//Register Doc
const createUser={
    tags: ["USERS"],
    description: "Users Register, Login,Update,and Delete",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            example:"jacques"
                        },
                        email:{
                            type:"string",
                            example:"jacques@gmail.com"
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

//Log Doc
const logUser={
    tags: ["USERS"],
    description: "Users Register, Login,Update,and Delete",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        value:{
                            type:"string",
                            example:"jacques"
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

//updateUser

const UpdateUser={
    tags: ["USERS"],
    description: "UPDATE USER",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            example:"jack"
                        },
                        email:{
                            type:String,
                            required:true,
                        },
                        password:{
                            type:"string",
                            example:"12345"
                        },
                        userId:{
                            type:"string",
                            example:"admin"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}
//Find user
const findUser = {
    tags: ["USERS"],
    description: "GET USER",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: 'object',
                    example: {
                        status: "success",
                        data: []
                    },
                },
            },
        },
    },

};

const eraseUser={
    tags: ["USERS"],
    description: "DELETE USER",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63e9227fc807f6e9217d955a"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{
                            type:"string",
                            example:"admin"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

const AllUser = {
    tags: ["USERS"],
    description: "GET USER",
    parameters: [
        {}
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: 'object',
                    example: {
                        status: "success",
                        data: []
                    },
                },
            },
        },
    },

};

const userSw={
    "/api/users/register":{
        post:createUser,
    },
    "/api/users/login":{
        post:logUser
    },
        "/api/users/updateById/{id}":{
            patch:UpdateUser
        },
        "/api/users/findById/{id}":{
            get:findUser
        },
        "/api/users/eraseById/{id}":{
            delete:eraseUser
        },
        "/api/users/getAll":{
            get:AllUser
        },
    
}


module.exports=userSw