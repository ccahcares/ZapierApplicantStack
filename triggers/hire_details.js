const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/o/api/hire/${bundle.inputData.hire_serial}`,
    method: 'GET',
    headers: {
      Token: bundle.authData.Token,
      Publisher: bundle.authData.Publisher,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();

    const result = [];

    renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
      [newProp]: old,
      ...others,
    });

    result.push(renameProp('Hire Serial', 'id', response.json));

    return result;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'hire_serial',
        type: 'string',
        label: 'Hire Serial',
        default: 'e2u45n818ys9',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 'e2u45n818ys9',
      'Method Result': 'Success',
      'Candidate Serial': '',
      'First Name': 'Michael',
      'Last Name': 'Mahoney',
      Email: 'michael.gregory.mahoney@gmail.com',
      'Address 1': '14516 Stirling Drive',
      'Address 2': '',
      City: 'Lakewood Ranch',
      State: 'FL',
      Zip: '34202',
      Phone: '9417559927',
      'Start Date': '07/21/2020',
      'Job Name': 'CNA or HHA',
      Location: 'Sarasota, Florida',
      'Job Category': 'Technician',
      'Job Type': 'Non-exempt (hourly)',
      'Pay Rate': '14.00',
      'Date of Hire': '07/10/2020',
      DOB: '01/10/1984',
      SSN: '123121234',
      Stage: 'New',
      Manager: 'Greg Mahoney',
      'Create Date': '08/21/2020 04:26 PM',
      'Last Modified Date': '08/21/2020 08:09 PM',
      Questionnaires: [
        {
          'Questionnaire Name': 'Change of Status',
          'Questionnaire Serial': 'e4u45n8ub7cn',
          'Submit Date': '08/21/2020 08:09 PM',
          User: 'Michael Mahoney',
          Questions: [
            { Question: 'First Name', Value: 'Michael' },
            { Question: 'Last Name', Value: 'Mahoney' },
            { Question: 'Email', Value: 'michael.gregory.mahoney@gmail.com' },
            { Question: 'Address 1', Value: '14516 Stirling Drive' },
            { Question: 'Address 2', Value: '' },
            { Question: 'City', Value: 'Lakewood Ranch' },
            { Question: 'State', Value: 'FL' },
            { Question: 'Zip', Value: '34202' },
            { Question: 'Social Security Number (SSN)', Value: '123121234' },
            { Question: 'Date of Birth (DOB)', Value: '01/10/1984' },
            { Question: 'Date of Hire', Value: '07/10/2020' },
            { Question: 'Job Title', Value: 'CNA or HHA' },
            { Question: 'Rate of Pay', Value: '14.00' },
            { Question: 'Effective Pay Rate Change Date', Value: '08/21/2020' },
            { Question: 'Date of Termination', Value: '08/21/2020' },
            {
              Question: 'Reason(s) For Termination',
              Value:
                'Insubordination and related issues such as dishonesty or breaking company rules',
            },
            { Question: 'Other Termination Note', Value: 'efrgv' },
          ],
        },
      ],
      Forms: [],
    },
    outputFields: [
      { key: 'id' },
      { key: 'Method Result' },
      { key: 'Candidate Serial' },
      { key: 'First Name' },
      { key: 'Last Name' },
      { key: 'Email' },
      { key: 'Address 1' },
      { key: 'Address 2' },
      { key: 'City' },
      { key: 'State' },
      { key: 'Zip' },
      { key: 'Phone' },
      { key: 'Start Date' },
      { key: 'Job Name' },
      { key: 'Location' },
      { key: 'Job Category' },
      { key: 'Job Type' },
      { key: 'Pay Rate' },
      { key: 'Date of Hire' },
      { key: 'DOB' },
      { key: 'SSN' },
      { key: 'Stage' },
      { key: 'Manager' },
      { key: 'Create Date' },
      { key: 'Last Modified Date' },
      { key: 'Questionnaires[]Questionnaire Name' },
      { key: 'Questionnaires[]Questionnaire Serial' },
      { key: 'Questionnaires[]Submit Date' },
      { key: 'Questionnaires[]User' },
      { key: 'Questionnaires[]Questions[]Question' },
      { key: 'Questionnaires[]Questions[]Value' },
    ],
  },
  key: 'Hire_details',
  noun: 'Hire',
  display: {
    label: 'Hire Details',
    description: 'Get detailed information about a Hire',
    hidden: false,
    important: true,
  },
};
