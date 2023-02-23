const enterPost={
    tags: ["POST"],
    description: "POST CREATION",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:String,
                            required:true,
                        },
                        char:{
                            type:String,
                            required:false,
                        },
                        photo:{
                            type:String,
                            required:false,
                        },
                        author:{
                            type:String,
                            required:true,
                        },
                        position:{
                            type:String,
                            require:true,
                        },
                        category:{
                            type:String,
                            require:true,
                        }
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

const changePost={
    tags: ["POST"],
    description: "UPDATE POST",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of post",
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
                        title:{
                            type:String,
                            required:true,
                        },
                        char:{
                            type:String,
                            required:false,
                        },
                        photo:{
                            type:String,
                            required:false,
                        },
                        author:{
                            type:String,
                            required:true,
                        },
                        position:{
                            type:String,
                            require:true,
                        },
                        category:{
                            type:String,
                            require:true,
                        },                       
                        postId:{
                            type:"string",
                            example:"..."
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

const findPost = {
    tags: ["POST"],
    description: "GET POST",
    description: "find post by Id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "postId",
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


const erasePost={
    tags: ["POST"],
    description: "DELETE POST",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of post",
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
                        postId:{
                            type:"string",
                            example:"..."
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
const AllPost = {
    tags: ["POST"],
    description: "find all post",
    security:[{
        token :[]
    }],
    
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


const postSw={
    "/api/posts/register":{
        post:enterPost
    },
    "/api/posts/changeById/{id}":{
        patch:changePost
    },
    "/api/posts/findById/{id}":{
        get:findPost
    },
    "/api/posts/removeById/{id}":{
        delete:erasePost
    },
    "/api/posts/getAll":{
        get:AllPost

}
}



module.exports=postSw