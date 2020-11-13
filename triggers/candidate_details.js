const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/api/candidate/${bundle.inputData.candidate_serial}`,
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

    result.push(renameProp('Candidate Serial', 'id', response.json));

    return result;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'candidate_serial',
        type: 'string',
        label: 'Candidate Serial',
        default: 'a4u45n8i6fj2',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    canPaginate: false,
    sample: {
      id: 'a4u45n8i6fj2',
      'Method Result': 'Success',
      'Job Serial': 'a2u45n8w33ui',
      'Job Name': 'Speech Therapist PRN [1028]',
      'First Name': 'Courtney',
      'Last Name': 'Flores',
      'Address 1': '3345 Grant Cove Circle Apt. 208',
      'Address 2': '',
      City: 'Cape Coral',
      State: 'Florida',
      Zip: '33991',
      Phone: '9373081324',
      Email: 'courtney.flores219@gmail.com',
      Source: 'Indeed',
      Rating: 'Top Prospect',
      Disposition: '',
      'Referred By': '',
      Stage: 'Interview',
      'Stage Type': '',
      Score: '45',
      'Create Date': '08/21/2020 12:54 PM',
      'Create Date Timestamp': 1598028893,
      'Cover Letter': '',
      Notes: [
        {
          text: 'Application received from Indeed Apply',
          type: 'System',
          timestamp: 1598028894,
        },
        {
          text:
            'Courtney Flores submitted answers to &apos;Employment / Job Application&apos; (Signature Address=174.228.15.115)',
          type: 'System',
          timestamp: 1598029371,
        },
        {
          text: 'Michael Mahoney set Stage to Interested in Pursuing ',
          type: 'System',
          timestamp: 1598029423,
        },
        {
          text: 'Michael Mahoney set Stage to Manager Review',
          type: 'System',
          timestamp: 1598029438,
        },
        {
          text: 'Michael Mahoney set Rating to Top Prospect',
          type: 'System',
          timestamp: 1598029468,
        },
        {
          text:
            'Michael Mahoney added event &quot;Phone Interview&quot; and assigned to Jessica Erb.',
          type: 'System',
          timestamp: 1598029864,
        },
        {
          text:
            'Michael Mahoney submitted feedback to &apos;Social Media review&apos;',
          type: 'System',
          timestamp: 1598030020,
        },
        {
          text: 'Michael Mahoney set Stage to Interview',
          type: 'System',
          timestamp: 1598030041,
        },
        {
          text:
            'Michael Mahoney edited event &quot;Phone Interview&quot; and accepted the candidate&apos;s selected event time, set Create feedback task for users to &quot;Yes&quot;.',
          type: 'System',
          timestamp: 1598032633,
        },
        {
          text:
            'Michael Mahoney edited event &quot;Phone Interview&quot; and set Duration to &quot;0&quot;,  assigned to Susan Mahoney.',
          type: 'System',
          timestamp: 1598033335,
        },
        {
          text:
            'Susan Mahoney submitted feedback to &apos;Interview Evaluation Form 2&apos;',
          type: 'System',
          timestamp: 1598126971,
        },
      ],
      Files: [
        {
          name: 'Resume.docx',
          url:
            'https://careconnectionsathome.applicantstack.com/x/attachment/a6u45n8r0fmy?apikey=d02fed148970a8250b4e6e11e1a57bec8a5b387b',
          is_resume: 1,
          apikey_expires: 1598155200,
        },
        {
          name: '117107675_10217016229344342_5952569651478897675_n.jpg',
          url:
            'https://careconnectionsathome.applicantstack.com/x/attachment/a6u45n8gwqd6?apikey=ae3ee2d2c36bece17cb1df58703b6ab850e9ca9e',
          is_resume: 0,
          apikey_expires: 1598155200,
        },
      ],
      Questionnaires: [
        {
          'Questionnaire Name': 'Speech Therapist Screening Questions',
          'Questionnaire Serial': 'a7u45n8wuohv',
          'Submit Date': '08/21/2020 12:54 PM',
          'Submit Date Timestamp': 1598028894,
          Score: 45,
          Questions: [
            {
              Question:
                'Are you licensed to work as a Speech Therapist in Florida?',
              Value: 'Yes',
            },
            {
              Question:
                'How many years experience do you have working as a Speech Therapist?',
              Value: '1-2 years',
            },
            {
              Question:
                'Is your Basic Life Support (BLS) certification current?',
              Value: 'Yes',
            },
            {
              Question:
                'Are you willing to work with clients who have coronavirus symptoms if you are provided proper personal protective equipment?',
              Value: 'Yes',
            },
            {
              Question:
                'Are you available to work:<br><br>(Select all that apply)',
              Value: 'Days, Evenings',
            },
          ],
        },
        {
          'Questionnaire Name': 'Employment / Job Application',
          'Questionnaire Serial': 'a7u45n8c04ow',
          'Submit Date': '08/21/2020 01:02 PM',
          'Submit Date Timestamp': 1598029371,
          Questions: [
            { Question: 'Date Available', Value: '2020-08-22' },
            { Question: 'Desired Pay', Value: '60' },
            { Question: '', Value: 'Hourly' },
            { Question: 'Employment Desired', Value: 'Per-Diem' },
            { Question: 'How did you hear about us?', Value: '' },
            { Question: 'Are you a U.S. Citizen?', Value: 'Yes' },
            {
              Question: 'If no, are you allowed to work in the U.S.?',
              Value: '',
            },
            {
              Question: 'Have you ever worked for this employer?',
              Value: 'No',
            },
            { Question: 'If yes, what date did you start?', Value: '' },
            { Question: 'If yes, what date did you end?', Value: '' },
            {
              Question: 'Have you ever been convicted of a felony?',
              Value: 'No',
            },
            {
              Question:
                'If yes, does your felony conviction <br>forbid you from employment <br>by a home care agency?',
              Value: '',
            },
            {
              Question:
                'Are you capable of performing the job set forth in the job description?',
              Value: 'Yes',
            },
            {
              Question:
                'If no, which job requirement(s) are you unable to meet?',
              Value: '',
            },
            { Question: 'Name of High School', Value: '' },
            { Question: 'City', Value: '' },
            { Question: 'State', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'graduate?', Value: '' },
            { Question: 'Diploma', Value: '' },
            { Question: 'Name of College', Value: '' },
            { Question: 'City', Value: '' },
            { Question: 'State', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'graduate?', Value: '' },
            { Question: 'Diploma', Value: '' },
            { Question: 'Name of Other Institution 1', Value: '' },
            { Question: 'City', Value: '' },
            { Question: 'State', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'Degree/Certification', Value: '' },
            { Question: 'Name of Other Institution 2', Value: '' },
            { Question: 'City', Value: '' },
            { Question: 'State', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'Degree/Certification', Value: '' },
            { Question: 'Company/Individual', Value: '' },
            { Question: 'Email', Value: '' },
            { Question: 'Phone', Value: '' },
            { Question: 'Address', Value: '' },
            { Question: 'Starting Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Ending Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Job Title', Value: '' },
            { Question: 'Responsibilities', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'Reason For Leaving', Value: '' },
            { Question: 'Company/Individual', Value: '' },
            { Question: 'Email', Value: '' },
            { Question: 'Phone', Value: '' },
            { Question: 'Address', Value: '' },
            { Question: 'Starting Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Ending Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Job Title', Value: '' },
            { Question: 'Responsibilities', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'Reason For Leaving', Value: '' },
            { Question: 'Company/Individual', Value: '' },
            { Question: 'Email', Value: '' },
            { Question: 'Address', Value: '' },
            { Question: 'Phone', Value: '' },
            { Question: 'Starting Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Ending Pay', Value: '' },
            { Question: '', Value: '' },
            { Question: 'Job Title', Value: '' },
            { Question: 'Responsibilities', Value: '' },
            { Question: 'From', Value: '' },
            { Question: 'To', Value: '' },
            { Question: 'Reason For Leaving', Value: '' },
            {
              Question:
                'If asked, are you willing to consent to a level 2 background check?',
              Value: 'Yes',
            },
            {
              Question:
                'List all states for which you are licensed or certified. Provide registration and expiration date. Summarize special job-related skills and qualification acquired from employment or other experience.',
              Value: 'ccc asha, Florida DOH speech language pathology license',
            },
            {
              Question: 'Signature',
              Value:
                '<span class="questionnaire_signature">Courtney Flores</span>',
            },
            { Question: 'Date', Value: '2020-08-21' },
            { Question: 'Printed Name', Value: 'Courtney Flores' },
          ],
        },
        {
          'Questionnaire Name': 'Social Media review',
          'Questionnaire Serial': 'a7u45n82ynez',
          'Submit Date': '08/21/2020 01:13 PM',
          'Submit Date Timestamp': 1598030020,
          'Feedback User': 'Michael Mahoney',
          Questions: [
            {
              Question: 'Profile Picture',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/x/attachment/a6u45n8gwqd6">117107675_10217016229344342_5952569651478897675_n.jpg</a>',
            },
            { Question: 'Comments', Value: '' },
          ],
        },
        {
          'Questionnaire Name': 'Interview Evaluation Form 2',
          'Questionnaire Serial': 'a7u45n8gnc3u',
          'Submit Date': '08/22/2020 04:09 PM',
          'Submit Date Timestamp': 1598126971,
          'Feedback User': 'Susan Mahoney',
          Questions: [
            {
              Question:
                'The candidate has the necessary education and/or training required by the position.',
              Value: 'Exceeds requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate has prior work experience that is related to the position.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated to your satisfaction that he/she had the necessary technical skills to perform the job successfully.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated to your satisfaction that he/she had the necessary experience in supervising others to perform the job successfully.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated to your satisfaction that he/she had the necessary leadership skills to perform the job successfully.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate articulated ideas clearly both written and orally.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated the ability to work well in a team and with superiors, peers, and reporting staff.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated the ability to manage time independently and work efficiently.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated the ability to be customer focused.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate expressed interest and excitement about the job.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            {
              Question:
                'The candidate demonstrated the ability to design innovative solutions and solve problems.',
              Value: 'Meets requirements',
            },
            { Question: 'Comments:', Value: '' },
            { Question: 'Overall Recommendation', Value: 'Meets requirements' },
            { Question: 'Comments:', Value: '' },
          ],
        },
      ],
    },
    outputFields: [
      { key: 'id' },
      { key: 'Method Result' },
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
      { key: 'Cover Letter' },
      { key: 'Notes[]text' },
      { key: 'Notes[]type' },
      { key: 'Notes[]timestamp', type: 'datetime' },
      { key: 'Files[]name' },
      { key: 'Files[]url' },
      { key: 'Files[]is_resume' },
      { key: 'Files[]apikey_expires' },
      { key: 'Questionnaires[]Questionnaire Name' },
      { key: 'Questionnaires[]Questionnaire Serial' },
      { key: 'Questionnaires[]Submit Date' },
      { key: 'Questionnaires[]Submit Date Timestamp', type: 'datetime' },
      { key: 'Questionnaires[]Score' },
      { key: 'Questionnaires[]Questions[]Question' },
      { key: 'Questionnaires[]Questions[]Value' },
      { key: 'Questionnaires[]Feedback User' },
    ],
  },
  key: 'candidate_details',
  noun: 'Candidate',
  display: {
    label: 'Candidate Details',
    description:
      'Gets the detailed information for a candidate from applicantStack',
    hidden: false,
    important: true,
  },
};
