
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE resource RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('resource').insert([
        {category: 'general', type: 'information', title: "Initial Visit, Treatment Plan", article: 'https://s3.us-east-2.amazonaws.com/wpa-resources/Fertility+Initial+Visit+Treatment+Plan.pdf'},
        {category: 'breastfeeding', type: 'information', title: "Breastfeeding, Herb Directions", article: 'https://s3.us-east-2.amazonaws.com/wpa-resources/Breastfeeding_Herb+Directions.pdf'},
        {category: 'ovulation', type: 'information', title: "BBT Charting", article: 'https://s3.us-east-2.amazonaws.com/wpa-resources/BBT+Charting.pdf'},
        {category: 'pregnancy', type: 'information', title: "First Trimester", article: 'https://s3.us-east-2.amazonaws.com/wpa-resources/First+Trimester.pdf'},
        {category: 'ovulation', type: 'information', title: "OPK Instruction Sheet", article: 'https://s3.us-east-2.amazonaws.com/wpa-resources/OPK+Instruction+Sheet.pdf'}
      ]);
    });
};
