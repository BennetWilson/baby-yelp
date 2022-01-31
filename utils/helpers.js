module.exports = {

    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

    greaterThan (val1, val2, options) {
        if (val1 > val2) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
}