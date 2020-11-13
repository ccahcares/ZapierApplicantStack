const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/api/candidates/${
      bundle.meta.page + 1
    }`,
    method: 'GET',
    headers: {
      Token: bundle.authData.Token,
      Publisher: bundle.authData.Publisher,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();

    const results = response.json.Candidates.map(
      ({ 'Candidate Serial': id, ...rest }) => ({ id, ...rest })
    );

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      id: 'a4u45n8cbzrh',
      'Job Serial': 'a2u45n8nz03p',
      'Job Name': 'CNA or HHA [1001]',
      'First Name': 'Laquasia',
      'Last Name': 'Johnson',
      'Address 1': '1540 n Lockwood ridge road ',
      'Address 2': '',
      City: 'Sarasota ',
      State: 'Fl ',
      Zip: '34237',
      Phone: '9418797210',
      Email: 'johnsonlaquasia45@gmail.com',
      Source: 'Indeed',
      Rating: '',
      Disposition: 'Insufficient Education',
      'Referred By': '',
      Stage: 'Do Not Pursue',
      'Stage Type': 'Do Not Pursue',
      Score: '0',
      'Create Date': '04/24/2020 10:30 AM',
      'Create Date Timestamp': 1587738635,
    },
    outputFields: [
      { key: 'id' },
      { key: 'Job Serial' },
      { key: 'Job Name' },
      { key: 'First Name' },
      { key: 'Last Name' },
      { key: 'Address 1' },
      { key: 'Address 2' },
      { key: 'City' },
      { key: 'State' },
      { key: 'Zip' },
      { key: 'Phone' },
      { key: 'Email' },
      { key: 'Source' },
      { key: 'Rating' },
      { key: 'Disposition' },
      { key: 'Referred By' },
      { key: 'Stage' },
      { key: 'Stage Type' },
      { key: 'Score' },
      { key: 'Create Date' },
      { key: 'Create Date Timestamp', type: 'datetime' },
    ],
  },
  key: 'new_candidate',
  noun: 'Candidates',
  display: {
    label: 'New Candidate',
    description: 'Lists all the candidates from applicantStack.',
    hidden: false,
    important: true,
  },
};
