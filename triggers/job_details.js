const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/api/job/${bundle.inputData.job_serial}`,
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
    const result = [];

    renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
      [newProp]: old,
      ...others,
    });

    result.push(renameProp('Job Serial', 'id', response.json));

    return result;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'job_serial',
        type: 'string',
        label: 'Job Serial',
        helpText: 'This is the unique identifier for the job listings.',
        default: 'a2u45n8u2mn1',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    canPaginate: false,
    sample: {
      id: 'a2u45n8u2mn1',
      'Method Result': 'Success',
      'Job ID': '1024',
      'Job Name': 'Registered Nurse PRN',
      Stage: 'Open',
      'Stage Type': 'Open',
      'Job Boards': [
        'applicantstack',
        'glassdoor',
        'google',
        'indeed',
        'linkedinjobs',
      ],
      'Job Listing':
        "Care Connections At Home is expanding rapidly and actively seeking several skilled home health nurses. We work with clients of all ages and backgrounds who require daily care in their homes. Most of our clients are elderly and have multiple co-morbidities. We are looking for nurses with recent acute care experience and who are compassionate and thoughtful.  If you are an energetic nurse who enjoys working for a rapidly expanding company, then Care Connections At Home will be an excellent match for you!\r\nWe currently have openings in Sarasota, Lee, DeSoto, and Collier counties.\r\nPosition Qualifications:\r\n\tRN accredited program graduate\r\n\t5+ years of acute care experience\r\n\tFL RN license\r\n\tHome care experienced a plus.\r\n\tProvides direct patient care as ordered by the client's physician. Includes wound management, IV Infusion, medication management, and client/family education.\r\n\tResponsible for following the plan of care, providing treatments, and working collaboratively with the members of the team to help achieve positive outcomes.\r\nBenefits of Joining Care Connections At Home:\r\n\tFlexible scheduling\r\n\tPay range negotiable with increases based on performance, and customer feedback\r\n\tTime and one- half rate of pay for worked holidays\r\n\tBi-weekly in-person orientation with a virtual meeting alternative; get to work quickly.\r\n\tWeekly pay\r\n\tDirect deposit\r\n\tBonus opportunities\r\n\tOnline training available\r\n\tPaid continuing education and BLS certification renewals\r\n\tSupportive leadership team\r\nWe would love to talk with you about our job opportunities. Join the Care Connections At Home team!",
      'Job Listing Html':
        '<p>Care Connections At Home is expanding rapidly and&nbsp;actively seeking several skilled home health nurses. We work with clients of all ages and backgrounds who require daily care in their homes. Most of our clients are elderly&nbsp;and have multiple co-morbidities.&nbsp;We are looking for nurses with recent acute care experience and who are&nbsp;compassionate and thoughtful.&nbsp; If you are an energetic nurse who enjoys working for a rapidly&nbsp;expanding company, then Care Connections At Home will be an excellent match for you!</p>\r\n\r\n<p>We currently have openings in Sarasota, Lee, DeSoto, and Collier counties.</p>\r\n\r\n<p><strong>Position Qualifications:</strong></p>\r\n\r\n<ul>\r\n\t<li>RN accredited program graduate</li>\r\n\t<li>5+ years of acute care experience</li>\r\n\t<li>FL RN license</li>\r\n\t<li>Home care experienced a plus.</li>\r\n\t<li>Provides direct patient care as ordered by the client&rsquo;s physician. Includes wound management, IV Infusion, medication management, and client/family education.</li>\r\n\t<li>Responsible for following the plan of care, providing treatments, and working collaboratively with the members of the team to help achieve positive outcomes.</li>\r\n</ul>\r\n\r\n<p><strong>Benefits of Joining Care Connections At Home:</strong></p>\r\n\r\n<ul>\r\n\t<li>Flexible scheduling</li>\r\n\t<li>Pay range negotiable with increases based on performance, and customer feedback</li>\r\n\t<li>Time and one- half rate of pay for worked holidays</li>\r\n\t<li>Bi-weekly in-person orientation with a virtual meeting alternative; get to work quickly.</li>\r\n\t<li>Weekly pay</li>\r\n\t<li>Direct deposit</li>\r\n\t<li>Bonus opportunities</li>\r\n\t<li>Online training available</li>\r\n\t<li>Paid continuing education and BLS certification renewals</li>\r\n\t<li>Supportive leadership team</li>\r\n</ul>\r\n\r\n<p>We would love to talk with you about our job opportunities. Join the Care Connections At Home team!</p>\r\n',
      'Questionnaire Serials': ['a7u45n8ios7b'],
      Location: 'Naples, Florida',
      Department: 'Nursing Services',
      'Job Category': 'Professionals',
      'Job Type': 'Non-exempt (hourly)',
      'Campaign Start Date': '06/19/2020',
      'Salary Range': '$29.00 - $32.00 /hour',
      Note: '',
      'Create Date': '06/19/2020 11:56 AM',
      'Create Date Timestamp': 1592582166,
      'Last Modified Date': '07/21/2020 02:26 PM',
      'Last Modified Date Timestamp': 1595356003,
    },
    outputFields: [
      { key: 'id' },
      { key: 'Method Result' },
      { key: 'Job ID' },
      { key: 'Job Name' },
      { key: 'Stage' },
      { key: 'Stage Type' },
      { key: 'Job Boards[]0' },
      { key: 'Job Boards[]1' },
      { key: 'Job Boards[]2' },
      { key: 'Job Boards[]3' },
      { key: 'Job Boards[]4' },
      { key: 'Job Boards[]5' },
      { key: 'Job Boards[]6' },
      { key: 'Job Boards[]7' },
      { key: 'Job Boards[]8' },
      { key: 'Job Boards[]9' },
      { key: 'Job Boards[]10' },
      { key: 'Job Boards[]11' },
      { key: 'Job Boards[]12' },
      { key: 'Job Boards[]13' },
      { key: 'Job Listing' },
      { key: 'Job Listing Html' },
      { key: 'Questionnaire Serials[]0' },
      { key: 'Questionnaire Serials[]1' },
      { key: 'Questionnaire Serials[]2' },
      { key: 'Questionnaire Serials[]3' },
      { key: 'Questionnaire Serials[]4' },
      { key: 'Questionnaire Serials[]5' },
      { key: 'Questionnaire Serials[]6' },
      { key: 'Questionnaire Serials[]7' },
      { key: 'Questionnaire Serials[]8' },
      { key: 'Questionnaire Serials[]9' },
      { key: 'Questionnaire Serials[]10' },
      { key: 'Questionnaire Serials[]11' },
      { key: 'Location' },
      { key: 'Department' },
      { key: 'Job Category' },
      { key: 'Job Type' },
      { key: 'Campaign Start Date' },
      { key: 'Salary Range' },
      { key: 'Note' },
      { key: 'Create Date' },
      { key: 'Create Date Timestamp', type: 'datetime' },
      { key: 'Last Modified Date' },
      { key: 'Last Modified Date Timestamp', type: 'datetime' },
    ],
  },
  key: 'Job_details',
  noun: 'Job',
  display: {
    label: 'Job Details',
    description: 'gets the job details from applicantStack.',
    hidden: false,
    important: true,
  },
};
