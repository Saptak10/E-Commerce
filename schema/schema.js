// const{ projects, clients } = require('../sampleData.js')

// Mongoose Model

const Project = require('../models/projectModel')
const Client = require('../models/clientModel')

const { GraphQLObjectType, 
    GraphQLID, 
    GraphQLString,
    GraphQLSchema, 
    GraphQLList} = require('graphql')

const dbConnection = require('../config/dbConnection');

//Projects Type

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        status: { type: GraphQLString},
        client: { 
            type: ClientType,
            resolve(parent, args) {
                // return clients.find(client => client.id === parent.clientId);
                return Client.findById(parent.clientId);
            }
        },
    })
})

//Client Type

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) { 
                // return projects;
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // return projects.find(project => project.id === args.id);
                return Project.findById(args.id);
            }
        },

        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) { 
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // return clients.find(client => client.id === args.id);
                return Client.findById(args.id);
            }
        },      
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});