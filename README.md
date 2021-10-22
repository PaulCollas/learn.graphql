# Learn GraphQL

Pedagogical project for Efrei Paris to learn GraphQL.

The purpose of this challenge is to learn GraphQL through the creation of an API. I use TypeScript

## To Started

The story is simple, I'm a Freelance and I want to recreate a Facebook like for a client. For this I will need to implement an API that respect the following specifications.


## Features

- Register
- Create a post
- Read all the posts
- Read a post by It's ID
- Update a post by It's ID
- Delete a post by It's ID
- Create a comment on a post
- Read all the comments from a post
- Read a comment by It's ID
- Read a comment by It's ID
- Delete a comment by It's ID

## Models

For exemple in GraphQL :

`
model User
  id: int ( or string if you use UUID )
  firstName: string
  lastName: string
  email: string
  password: string
`

`
model Post
  id: int
  author: User
  comments: Post[]
  content: string
`
## Ressources

I use this ressources for this project

- [GraphQL Doc](https://graphql.org/learn/), I find here explanation about GraphQL.
- [Appolo Serveer](https://www.apollographql.com/docs/apollo-server/), Apollo Server is a npm package that help me bootstrap a GraphQL Server.


## Install

`
npm install
`

## Start the project

`
node index.js
`


## Autors


* **Paul COLLAS**

## License

MIT


