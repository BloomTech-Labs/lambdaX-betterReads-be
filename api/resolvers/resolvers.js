const resolvers = {
  Query: {
    greet: () => {
      return 'Hello from GraphQl side';
    },
    users: () => {
      return fetchData();
    },
  },
};

module.exports = resolvers;
