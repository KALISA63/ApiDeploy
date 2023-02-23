const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// const userDoc = require("../routes/userDoc");
const userSw = require("../routes/userDoc");
const postSw = require("../routes/postDoc");
const catSw = require("../routes/catDoc");
// const PostDoc = require("../routes/PostsDoc");
// const categoryDoc=require("../routes/categoryDoc")
// const commentDoc = require("../routes/commentDoc");
// const realStateDoc= require("../routes/realStateDoc");

const options= {
    definition: {
        openapi: '3.0.0',
        info: {
          version: '1.0.0',
          title: 'myAPIs',
          description: 'Blog apis config',
        },
        servers: [
          {
            url: 'http://localhost:9000/',
            description: 'servDev',
          },
          
        ],
        tags: [
            {name:'USERS',description:'users routes'},
            {name:'POST',description:'posts routes'},
            {name:'CATEGORY',description:'categories routes'}
        ],

        components: {
            securitySchemes: {
              token:{
                type:'apiKey',
                scheme:'bearer',
                bearerFormat:'JWT',
                name:'token',
                in:'header'
              },
            },
          },
          paths: {
              ...userSw,
              ...postSw,
              ...catSw
          },
        },
        apis: ['../routes/*/.js'],
  
  };
  const swagDocs=(app)=>{
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}
const swaggerSpec=swaggerJSDoc(options);
module.exports= swagDocs
