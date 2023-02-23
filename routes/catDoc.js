const makeCat={
    tags: ["CATEGORY"],
    description: "CATEGORY CREATION",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        name:{
                            type:"string",
                            example:"EconIndustry"
                        },
                        icon: {
                            type: String,
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

const changeCat={
    tags: ["CATEGORY"],
    description: "UPDATE CATEGORY",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of cat",
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
                        name:{
                            type:"string",
                            example:"heading"
                        },
                        icon: {
                            type: String,
                        },
                        catsId:{
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

const findCat = {
    tags: ["CATEGORY"],
    description: "GET CAT",
    description: "find your category",

    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of Category",
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


const eraseCat={
    tags: ["CATEGORY"],
    description: "DELETE CAT",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of Category",
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
                        CatId:{
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
const AllCats = {
    tags: ["CATEGORY"],
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

const catSw={
    "/api/cats/register":{
        post:makeCat
    },
    "/api/cats/findById/{id}":{
        get:findCat
    },
    "/api/cats/changeById/{id}":{
        patch:changeCat
    },
    "/api/cats/eraseById/{id}":{
        delete:eraseCat
    },
    "/api/cats/getAll":{
        get:AllCats
    }
}

module.exports=catSw