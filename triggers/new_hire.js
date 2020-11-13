const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/o/api/hires/${
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

    const results = response.json.Hires.map(
      ({ 'Hire Serial': id, ...rest }) => ({ id, ...rest })
    );

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    type: 'polling',
    canPaginate: true,
    sample: {
      'Hire Serial': 'e2u45n8z0dmr',
      'First Name': 'Amy Shaneal',
      'Last Name': 'Lacey',
      Email: 'phoenixx1636@gmail.com',
      'Address 1': '3851 Virga Blvd',
      'Address 2': '',
      City: 'Sarasota',
      State: 'Florida',
      Zip: '34233',
      Phone: '9412272297',
      'Start Date': '06/09/2020',
      'Job Name': 'CNA',
      Location: 'Sarasota, Florida',
      'Job Category': 'home health care',
      'Job Type': 'Non-exempt (hourly)',
      'Pay Rate': '14.00',
      'Date of Hire': '06/04/2020',
      DOB: '07/18/1983',
      SSN: '255695071',
      Stage: 'Complete',
      Manager: 'Jessica Erb',
      'Create Date': '06/04/2020 05:32 PM',
      'Last Modified Date': '07/16/2020 02:03 PM',
    },
    outputFields: [
      { key: 'Hire Serial' },
      { key: 'First Name', label: 'First Name', type: 'string' },
      { key: 'Last Name', label: 'Last Name', type: 'string' },
      { key: 'Email', label: 'Email', type: 'string' },
      { key: 'Address 1', label: 'Address 1', type: 'string' },
      { key: 'Address 2', label: 'Address 2', type: 'string' },
      { key: 'City', label: 'City', type: 'string' },
      { key: 'State', label: 'State', type: 'string' },
      { key: 'Zip', label: 'Zip', type: 'string' },
      { key: 'Phone', label: 'Phone', type: 'string' },
      { key: 'Start Date', label: 'Start Date', type: 'datetime' },
      { key: 'Job Name', label: 'Job Name', type: 'string' },
      { key: 'Location', label: 'Location', type: 'string' },
      { key: 'Job Category' },
      { key: 'Job Type' },
      { key: 'Pay Rate', label: 'Pay Rate', type: 'string' },
      { key: 'Date of Hire' },
      { key: 'DOB', label: 'Date Of Birth', type: 'datetime' },
      { key: 'SSN', label: 'SSN', type: 'string' },
      { key: 'Stage', label: 'Stage', type: 'string' },
      { key: 'Manager' },
      { key: 'Create Date' },
      {
        key: 'Last Modified Date',
        label: 'Last Modified Date',
        type: 'datetime',
      },
    ],
  },
  key: 'new_hire',
  noun: 'Hires',
  display: {
    label: 'New Hire',
    description: 'Triggers when a new hire ticket is sent to the "New" stage.',
    hidden: false,
    important: true,
  },
};
