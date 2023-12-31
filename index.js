import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./app/routes/userRoutes.js";
import authRoutes from "./app/routes/authRoutes.js";
import https from "https";
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// app.get("/", getTestData);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

// const server = new ApolloServer({
//     typeDefs: userSchema,
//     resolvers: userResolvers
//   });
//   app.use('/graphql', graphqlHTTP({
//     schema: userSchema,
//     rootValue: userResolvers,
//     graphiql: true
// }));
https
  .createServer(app).listen(8080, () => {
 console.log("congratulations we are connected 8080");
});
//   async function startApolloServer() {
//     await server.start();
  
//     server.applyMiddleware({ app });
  
//     app.listen(8080, () => {
//         console.log("congratulations we are connected");
    
//     })
//   }
  
//   startApolloServer();

