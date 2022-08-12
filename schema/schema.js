// const Project = require('../models/projectModel');
// const Client = require('../models/clientModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const User = require('../models/userModel');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

// // Project Type
// const ProjectType = new GraphQLObjectType({
//   name: 'Project',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     description: { type: GraphQLString },
//     status: { type: GraphQLString },
//     client: {
//       type: ClientType,
//       resolve(parent, args) {
//         return Client.findById(parent.clientId);
//       },
//     },
//   }),
// });

// // Client Type
// const ClientType = new GraphQLObjectType({
//   name: 'Client',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//   }),
// });

// Product Type
const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    brand: { type: GraphQLString },
    category: { type: GraphQLString },
    description: { type: GraphQLString },
    // reviews: [ 
    //   { 
    //     name: { type: GraphQLString },
    //     rating: { type: GraphQLInt },
    //     comment: { type: GraphQLString },
    //   },
    //   {
    //     timestamps: { type: GraphQLBoolean },
    //   }
    // ],
    ratings: { type: GraphQLString },
    numReviews: { type: GraphQLString },
    price: { type: GraphQLString },
    countInStock: { type: GraphQLString },
  }),
});

// Order Type
const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    orderItems: { 
        name: { type: GraphQLString },
        qty: { type: GraphQLInt },
        image: { type: GraphQLString },
        price: { type: GraphQLInt },
        product: {
          type: ProductType,
          resolve(parent, args) {
            return Product.findById(parent.productId);
          },
        },
      },
    shippingAddress: { 
      address: { type: GraphQLString },
      city: { type: GraphQLString },
      postalCode: { type: GraphQLString },
      country: { type: GraphQLString },
    },
    paymentMethod: { type: GraphQLString },
    paymentResult: { 
      id: { type: GraphQLString },
      status: { type: GraphQLString },
      update_time: { type: GraphQLString },
      email_address: { type: GraphQLString },
    },
    taxPrice: { type: GraphQLInt },
    shippingPrice: { type: GraphQLInt },
    totalPrice: { type: GraphQLInt },
    isPaid: { type: GraphQLBoolean },
    paidAt: { type: GraphQLString },
    isDelivered: { type: GraphQLBoolean },
    deliveredAt: { type: GraphQLString },
  }),
});

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // projects: {
    //   type: new GraphQLList(ProjectType),
    //   resolve(parent, args) {
    //     return Project.find();
    //   },
    // },
    // project: {
    //   type: ProjectType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Project.findById(args.id);
    //   },
    // },
    // clients: {
    //   type: new GraphQLList(ClientType),
    //   resolve(parent, args) {
    //     return Client.find();
    //   },
    // },
    // client: {
    //   type: ClientType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Client.findById(args.id);
    //   },
    // },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return User.find();
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent, args) {
        return User.find();
      },
    },
    order: {
      type: OrderType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Order.findById(args.id);
      },
    },
  },
});

// Mutations
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     // Add a client
//     addClient: {
//       type: ClientType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         email: { type: GraphQLNonNull(GraphQLString) },
//         phone: { type: GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const client = new Client({
//           name: args.name,
//           email: args.email,
//           phone: args.phone,
//         });

//         return client.save();
//       },
//     },
//     // Delete a client
//     deleteClient: {
//       type: ClientType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         Project.find({ clientId: args.id }).then((projects) => {
//           projects.forEach((project) => {
//             project.remove();
//           });
//         });

//         return Client.findByIdAndRemove(args.id);
//       },
//     },
//     // Add a project
//     addProject: {
//       type: ProjectType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         description: { type: GraphQLNonNull(GraphQLString) },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatus',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' },
//             },
//           }),
//           defaultValue: 'Not Started',
//         },
//         clientId: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         const project = new Project({
//           name: args.name,
//           description: args.description,
//           status: args.status,
//           clientId: args.clientId,
//         });

//         return project.save();
//       },
//     },
//     // Delete a project
//     deleteProject: {
//       type: ProjectType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         return Project.findByIdAndRemove(args.id);
//       },
//     },
//     // Update a project
//     updateProject: {
//       type: ProjectType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatusUpdate',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' },
//             },
//           }),
//         },
//       },
//       resolve(parent, args) {
//         return Project.findByIdAndUpdate(
//           args.id,
//           {
//             $set: {
//               name: args.name,
//               description: args.description,
//               status: args.status,
//             },
//           },
//           { new: true }
//         );
//       },
//     },
//   },
// });

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation,
});