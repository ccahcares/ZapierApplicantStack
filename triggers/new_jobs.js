const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/api/jobs/${
      bundle.meta.page + 1
    }`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Token: bundle.authData.Token,
      Publisher: bundle.authData.Publisher,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();

    const results = response.json.Jobs.map(({ 'Job Serial': id, ...rest }) => ({
      id,
      ...rest,
    }));

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      id: 'a2u45n8k5m87',
      'Job ID': '1020',
      'Job Name': 'Certified Occupational Therapist Assistant PRN',
      Stage: 'Filled',
      'Stage Type': 'Filled',
      Location: 'Fort Myers, Florida',
      Department: 'Therapy Services',
      'Job Category': 'Service Workers',
      'Job Type': 'Non-exempt (hourly)',
      'Campaign Start Date': '06/09/2020',
      'Salary Range': '$27-$30/hour',
      'Create Date': '06/17/2020 11:10 AM',
      'Create Date Timestamp': 1592406604,
      'Last Modified Date': '07/08/2020 11:42 PM',
      'Last Modified Date Timestamp': 1594266120,
    },
    outputFields: [
      { key: 'id' },
      { key: 'Job ID' },
      { key: 'Job Name' },
      { key: 'Stage' },
      { key: 'Stage Type' },
      { key: 'Location' },
      { key: 'Department' },
      { key: 'Job Category' },
      { key: 'Job Type' },
      { key: 'Campaign Start Date' },
      { key: 'Salary Range' },
      { key: 'Create Date' },
      { key: 'Create Date Timestamp' },
      { key: 'Last Modified Date' },
      { key: 'Last Modified Date Timestamp' },
    ],
  },
  key: 'new_jobs',
  noun: 'Jobs',
  display: {
    label: 'New Jobs',
    description: 'List all Jobs from applicantStack',
    hidden: false,
    important: true,
  },
};
