const { graphql, buildSchema } = require("graphql");

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Ejecutar el query hello
graphql({ schema, source: "{ hello }" }).then((data) => {
  console.log(data);
});
