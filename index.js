const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Post {
    id: Int!
    author: String!
    content: String!
    comments: String!
  }


  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createpost(id: Int, author: String, content: String, comments: String): Post!

    readpostbyId(id: Int, author: String, content: String, comments: String): Post!

    updatepostbyId(id: Int, author: String, content: String, comments: String): Post!

    deletepostbyId(id: Int): Post!
  }

`;

const users = [
    {
      id: '1',
      firstName: 'firstName1',
      lastName: 'lastName1',
      email: '1@1.com',
      password: '1'
    },
    {
      id: '2',
      firstName: 'firstName2',
      lastName: 'lastName2',
      email: '2@2.com',
      password: '2'
    },
  ];

  const posts = [
    {
      id: '6',
      author: 'test',
      content: 'truc',
      comments: 'testttttt',
    }
  ]

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  },
  Mutation: {


    // 1.CREATE POST
    createpost: (_, args) => {
      let id,author,comments,content

      [id,author,comments,content] = [args.id,args.author,args.comments,args.content]

      const postsUpdated = {id,author,comments,content}

      posts.push(postsUpdated)
      return postsUpdated;
    },


    // 2. READ ALL THE POSTS
    // TO READ ALL THE POST IT'S JUST WITH QUERY IN APOLLO SERVER


    // 3. READ ONE POST BY ID
    readpostbyId: (_, args) => {
      let id,author,comments,content

      [id] = [args.id]

      for (let i=0; i < posts.length; i++) {
        console.log("df", id.posts[i].id);
        if (id === posts[i].id) {
          [author, comments, content] = [args.author, args.comments, args.content]
          const postsreadId = {id, author, comments, content}
          console.log("postsreadId", postsreadId)
          return postsreadId
        }
      }
    },


    // 4. UPDATE ONE POST BY ID
    updatepostbyId: (_, args) => {
      let id,author,comments,content

      [id] = [args.id]
      
      for (let i=0; i < posts.length; i++) {
        if (id === posts[i].id) {
          [author, comments, content] = [args.author, args.comments, args.content]
          const postsUpdated = {id, author, comments, content}
          console.log("postsUpdated", postsUpdated)
          return postsUpdated
        }
      }
    },


    // 5. DELETE POST BY ONE ID

    deletepostbyId: (_, args) => {
      let id

      [id] = [args.id]
  
      for (let i=0; i < posts.length; i++) {
        if (id === posts[i].id) {
          posts.slice(1, 1)
          console.log("postsUpdated", posts)
          return posts
        }
      }
  
    }


    // 6. CREATE A COMMENT IN A POST




    // 7. READ  ALL THE COMMENTS FROM A POST


    // 8. READ A COMMENT BY ID


    // 9. UPDATE A COMMENT BY ID 

    // 10. DELETE POST BY ID
  }


};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
