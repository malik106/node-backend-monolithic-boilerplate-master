const databaseProvider = require('../providers/database');

exports.getCompanies = async (itemsPerPage, offset, databaseCall = false) => {
  if (databaseCall) {
    const getCompaniesQuery = databaseProvider.knex()
      .select()
      .from('database_table')
      .limit(itemsPerPage)
      .offset(offset);

    const companies = databaseProvider.executeQuery(getCompaniesQuery);
    if (companies && (await companies).rows && (await companies).rows.length) {
      return companies;
    }
  } else {
    const companies = [
      {
        id: 1,
        company_name: 'Quoted Infotech',
      },
    ];
    return companies;
  }
};
