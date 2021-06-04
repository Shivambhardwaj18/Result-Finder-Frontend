const Query = {
  hello: async (parent, args, context, info) => {
    return "Hello";
  },
};

module.exports = Query;
