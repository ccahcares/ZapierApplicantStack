const perform = (z, bundle) => {
  const options = {
    url: `https://${
      bundle.authData.domain
    }.applicantstack.com/o/api/hires/${1}`,
    method: 'GET',
    headers: {
      Token: bundle.authData.Token,
      Publisher: bundle.authData.Publisher,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();

    let results = response.json.Hires.map(({ 'Hire Serial': id, ...rest }) => ({
      id,
      ...rest,
    }));

    if (bundle.inputData.stage) {
      results = results.filter((hire) => {
        return bundle.inputData.stage.includes(hire.Stage);
      });
    }

    const output = Object.assign(
      {},
      ...Object.keys(results[0]).map((props) => ({
        [props]: results.map((prop) => prop[props]),
      }))
    );

    return [output];
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: 'e2u45n8gz6ff',
      'First Name': 'Amanda',
      'Last Name': 'Kaczrouske',
      Email: 'alsuzy1224@gmail.com',
      'Address 1': '5050 Riverfront Drive',
      'Address 2': 'Apt. C',
      City: 'Bradenton',
      State: 'FL',
      Zip: '34208',
      Phone: '9206062199',
      'Start Date': '05/26/2020',
      'Job Name': 'LPN',
      Location: 'Sarasota, Florida',
      'Job Category': 'home health care',
      'Job Type': 'Non-exempt (hourly)',
      'Pay Rate': '24.00',
      'Pay Change Effective': '',
      DOB: '12/24/1991',
      SSN: '398084384',
      Stage: 'Complete',
      Manager: 'Jessica Erb',
      'Create Date': '05/26/2020 09:49 AM',
      'Last Modified Date': '07/06/2020 10:29 AM',
    },
    outputFields: [
      { key: 'id' },
      { key: 'First Name' },
      { key: 'Last Name' },
      { key: 'Email' },
      { key: 'Address 1' },
      { key: 'Address 2' },
      { key: 'City' },
      { key: 'State' },
      { key: 'Zip' },
      { key: 'Phone' },
      { key: 'Start Date', type: 'string' },
      { key: 'Job Name' },
      { key: 'Location' },
      { key: 'Job Category' },
      { key: 'Job Type' },
      { key: 'Pay Rate' },
      { key: 'Pay Change Effective' },
      { key: 'DOB', type: 'string' },
      { key: 'SSN', type: 'string' },
      { key: 'Stage' },
      { key: 'Manager' },
      { key: 'Create Date', type: 'string' },
      { key: 'Last Modified Date', type: 'string' },
    ],
    inputFields: [
      {
        key: 'stage',
        label: 'Stage',
        type: 'string',
        dynamic: 'new_hire.Stage',
        required: false,
        list: true,
        altersDynamicFields: true,
      },
    ],
  },
  key: 'all_hires',
  noun: 'hire',
  display: {
    label: 'Get All Hires',
    description: 'Get All Hires From ApplicantStack',
    hidden: false,
    important: true,
  },
};
