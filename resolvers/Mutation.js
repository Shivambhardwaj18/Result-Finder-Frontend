const { sendRequest } = require("./sendRequest");

const Mutation = {
  getResult: async (parent, args, context, info) => {
    let r_nos = args.roll_numbers.split(" ");
    let return_array = [];

    for (let i = 0; i < r_nos.length; i++) {
      const key = parseInt(r_nos[i]);
      const value = await sendRequest(key);

      return_array.push({
        result: value,
      });
    }
    return return_array;
  },
};

module.exports = Mutation;
