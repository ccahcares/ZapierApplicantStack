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
        label: 'Hire Serial',
        type: 'string',
        default: 'e2u45n818ys9',
        helpText: 'The Hire Serial for the Hire in ApplicantStack',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 'e2u45n80wuls',
      'Method Result': 'Success',
      'Candidate Serial': 'a4u45n8u03bc',
      'First Name': 'Makayla',
      'Last Name': 'Emanuele',
      Email: 'makaylaemanuele@gmail.com',
      'Address 1': '4009 Middleburg Lane',
      'Address 2': '',
      City: 'Chesapeake',
      State: 'Virginia',
      Zip: '23321',
      Phone: '7576203023',
      'Start Date': '07/21/2020',
      'Job Name': 'Occupational Therapist PRN',
      Location: 'Sarasota, Florida',
      'Job Category': 'Professionals',
      'Job Type': 'Non-exempt (hourly)',
      'Pay Rate': '$60/visit initial evaluation, $50/treatment visits /visit',
      'Date of Hire': '07/16/2020',
      DOB: '',
      SSN: '',
      Stage: 'Complete',
      Manager: 'Jessica Erb',
      'Create Date': '07/16/2020 04:41 PM',
      'Last Modified Date': '08/21/2020 10:32 AM',
      Questionnaires: [
        {
          'Questionnaire Name': 'Requested Documents',
          'Questionnaire Serial': 'e4u45n83rygt',
          'Submit Date': '07/23/2020 09:47 AM',
          Questions: [
            {
              Question: 'Professional license/certifications',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8xnryp">OT Florida Licensure.pdf</a>',
            },
            {
              Question: 'American Heart Association BLS Certification',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n88gi3y">BLS:CPR Cert. .pdf</a>',
            },
            {
              Question: 'Social Security Card',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8xgzxi">D65022D2-3FDC-402B-8FEA-F4D6C486730C.jpeg</a>',
            },
            {
              Question: "Driver's License",
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8pz7yd">Drivers License.jpg</a>',
            },
            {
              Question: 'Proof of Influenza Vaccine',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8hjg6t">Flu Shot- 2019:2020.jpg</a>',
            },
            {
              Question:
                'Statement Of Good Health Signed by MD, NP, or PA (within past 6 mos.)<br><br><i>refer to supporting documents section of hiring portal for form</i>',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8nrd16">Physical Statement Care Connections (7:22:20).pdf</a>',
            },
            {
              Question: 'Prior TB Results (if available)',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8t0fu8">TB test 8:2:19.jpg</a>',
            },
            {
              Question: 'Proof of Hepatitis B Immunization',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8idob1">Hep B - MMR  TDAP- Makayla Emanuele (1).pdf</a>',
            },
            {
              Question: 'Proof of Auto Insurance',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n8orkoa">image.jpg</a>',
            },
            {
              Question: 'A Voided Check to set up Direct Deposit',
              Value:
                '<a href="https://careconnectionsathome.applicantstack.com/o/x/attachment/e3u45n88oou2">Copy of Voided Check.jpg</a>',
            },
          ],
        },
      ],
      Forms: [
        {
          'Form Name': 'Job Acceptance Statement',
          'Form Serial': 'e4u45n8gfk44',
          'Submit Date': '07/20/2020 01:16 PM',
          User: 'Jessica Erb',
          Questions: [
            { Question: 'date_af_date', Value: '07/20/2020' },
            { Question: 'name', Value: 'Makayla' },
            { Question: 'job title', Value: 'Occupational Therapist PRN' },
            {
              Question: 'compensation',
              Value:
                '$60/visit initial evaluation, $50/treatment visits /visit',
            },
            { Question: 'date_af_date', Value: '07/21/2020' },
          ],
        },
        {
          'Form Name': 'Occupational Therapist PRN',
          'Form Serial': 'e4u45n8t91n1',
          'Submit Date': '07/22/2020 04:26 PM',
          Questions: [
            {
              Question: 'Associate Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'New Hire Form',
          'Form Serial': 'e4u45n87efyl',
          'Submit Date': '07/22/2020 04:27 PM',
          Questions: [
            { Question: 'First Name_es_:signer', Value: 'Makayla' },
            { Question: 'Last Name_es_:signer', Value: 'Emanuele' },
            { Question: 'Address 1_es_:signer', Value: '4009 Middleburg Lane' },
            { Question: 'Address 2_es_:signer', Value: 'n/a' },
            { Question: 'City_es_:signer', Value: 'Chesapeake' },
            { Question: 'State_es_:signer', Value: 'Virginia' },
            { Question: 'Zip_es_:signer', Value: '23321' },
            {
              Question: 'Social Security Number (SSN)_es_:signer',
              Value: '228-67-8105',
            },
            {
              Question: 'Date of Birth (DOB)_es_:signer:date',
              Value: '02/19/1993',
            },
            { Question: 'Date of Hire_es_:signer:date', Value: '07/16/2020' },
          ],
        },
        {
          'Form Name': 'Associate Emergency Contact',
          'Form Serial': 'e4u45n8ze9tf',
          'Submit Date': '07/22/2020 04:29 PM',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Address_es_:signer',
              Value: '4009 Middleburg Lane, Chesapeake, Virginia 23321',
            },
            { Question: 'Cell Phone_es_:signer', Value: '7576203023' },
            {
              Question: 'Email_es_:signer:email',
              Value: 'makaylaemanuele@gmail.com',
            },
            { Question: 'Name_es_:signer:fullname', Value: 'Robert Weist' },
            { Question: 'Relationship_es_:signer', Value: 'Boyfriend' },
            {
              Question: 'Address_2_es_:signer',
              Value: '1097 Seneca Rd. Venice, FL 34293',
            },
            { Question: 'Phone_es_:signer', Value: '(985) 264-0325' },
          ],
        },
        {
          'Form Name': 'Background Screening Consent',
          'Form Serial': 'e4u45n88n94n',
          'Submit Date': '07/22/2020 04:30 PM',
          Questions: [
            {
              Question: 'Employee/Contractor Printed Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'EmployeeContractor Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Receipt of Associate Handbook',
          'Form Serial': 'e4u45n870oqd',
          'Submit Date': '07/22/2020 04:31 PM',
          Questions: [
            { Question: 'NAME_es_:signer:fullname', Value: 'Makayla Emanuele' },
            { Question: 'DATE_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emauele',
            },
          ],
        },
        {
          'Form Name': 'Policies and Procedures',
          'Form Serial': 'e4u45n8g0zyk',
          'Submit Date': '07/22/2020 04:31 PM',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Field Practice Statement',
          'Form Serial': 'e4u45n8fvrb1',
          'Submit Date': '07/22/2020 04:32 PM',
          Questions: [
            { Question: 'Text5_es_:signer', Value: 'Makayla Emanuele' },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': '2020 - W4 Federal Employee Withholding',
          'Form Serial': 'e4u45n8a3hes',
          'Submit Date': '07/22/2020 04:34 PM',
          Questions: [
            { Question: 'First name and middle initial', Value: 'Makayla' },
            { Question: 'Last name', Value: 'Emanuele' },
            { Question: 'Social Security Number', Value: '228-67-8105' },
            { Question: 'Address', Value: '4009 Middleburg Lane' },
            {
              Question: 'City or town state and ZIP code',
              Value: 'Chesapeake, Virginia, 23321',
            },
            {
              Question: 'Step 1, question C',
              Value: 'Single or Married filing seperately',
            },
            { Question: 'Step 2(b) Worksheet - 1', Value: '' },
            { Question: 'Step 2(b) Worksheet - 2a', Value: '' },
            { Question: 'Step 2(b) Worksheet - 2b', Value: '' },
            { Question: 'Step 2, option C checkbox', Value: '' },
            { Question: 'Step 2(b) Worksheet - 2c', Value: '' },
            { Question: 'Step 2(b) Worksheet - 3', Value: '' },
            { Question: 'Step3, under age of 17 multiplication', Value: '0' },
            { Question: 'Step 2(b) Worksheet - 4', Value: '' },
            {
              Question: 'Step 3, number of dependents multiplication',
              Value: '0',
            },
            { Question: 'Step 3, sum', Value: '0' },
            { Question: 'Step 4(b) Worksheet - 1', Value: '' },
            { Question: 'Step 4, 4(a)', Value: '' },
            { Question: 'Step 4(b) Worksheet - 2', Value: '' },
            { Question: 'Step 4(b) Worksheet - 3', Value: '' },
            { Question: 'Step 4, 4(b)', Value: '' },
            { Question: 'Step 4, 4(c)', Value: '' },
            { Question: 'Step 4(b) Worksheet - 4', Value: '' },
            { Question: 'Step 4(b) Worksheet - 5', Value: '' },
            {
              Question: 'Step 5, Employee Signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Step 5, Date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'I-9 with Employer Sections',
          'Form Serial': 'e4u45n8u3t9h',
          'Submit Date': '07/22/2020 04:36 PM',
          Questions: [
            { Question: 'Last Name', Value: 'Emanuele' },
            { Question: 'First Name', Value: 'Makayla' },
            { Question: 'Middle Initial', Value: '' },
            { Question: 'Other Last Names', Value: '' },
            { Question: 'Address', Value: '4009 Middleburg Lane' },
            { Question: 'Apartment Number', Value: '' },
            { Question: 'City', Value: 'Chesapeake' },
            { Question: 'State', Value: 'Virginia' },
            { Question: 'Zip Code', Value: '23321' },
            { Question: 'Date of Birth', Value: '02/19/1993' },
            { Question: 'SSN1', Value: '228' },
            { Question: 'SSN2', Value: '67' },
            { Question: 'SSN3', Value: '6105' },
            {
              Question: "Employee's Email Address",
              Value: 'makaylaemanuele@gmail.com',
            },
            { Question: "Employee's Phone", Value: '7576203023' },
            { Question: 'Attest', Value: 'A citizen of the United States' },
            { Question: 'Alien Registration NumberUSCIS Number 1', Value: '' },
            { Question: 'Alien Registration Number USCIS Number 2', Value: '' },
            { Question: '1 Alien Registration Number USCIS Number', Value: '' },
            { Question: '2 Form I94 Admission Number', Value: '' },
            { Question: '3 Foreign Passport Number', Value: '' },
            { Question: 'Country of Issuance', Value: '' },
            { Question: 'Employee Signature', Value: 'Makayla Emanuele' },
            { Question: 'Signature Date', Value: '07/22/2020' },
            { Question: 'Preparer or Translator', Value: 'Yes' },
            { Question: 'Signature of Preparer', Value: '' },
            { Question: 'Preparer Signature Date', Value: '' },
            { Question: 'Preparer Last Name', Value: '' },
            { Question: 'Preparer First Name', Value: '' },
            { Question: 'Preparer Address', Value: '' },
            { Question: 'Preparer City', Value: '' },
            { Question: 'Preparer State', Value: '' },
            { Question: 'Preparer Zip Code', Value: '' },
          ],
        },
        {
          'Form Name': 'Direct Deposit Form',
          'Form Serial': 'e4u45n8oox6e',
          'Submit Date': '07/22/2020 04:39 PM',
          Questions: [
            {
              Question: 'Company Name_es_:prefill:company',
              Value: 'Care Connections at Home, LLC',
            },
            { Question: 'Name of Bank_es_:signer', Value: 'Wells Fargo' },
            {
              Question: 'Name on Bank Account_es_:signer',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Checking or Savings', Value: 'Checking' },
            { Question: 'Bank account number_es_:signer', Value: '6727306760' },
            { Question: 'Bank routing number_es_:signer', Value: '051400549' },
            { Question: 'Amount_es_:signer', Value: '' },
            { Question: 'Check Box8_es_:signer', Value: 'Yes' },
            { Question: 'Manual (paper check)_es_:signer', Value: '' },
            { Question: 'Account described below_es_:signer', Value: '' },
            { Question: 'Name of Bank_2_es_:signer', Value: '' },
            { Question: 'Name on Bank Account_2_es_:signer', Value: '' },
            { Question: 'Bank account number_2_es_:signer', Value: '' },
            { Question: 'Checking or Savings 2_es_:signer', Value: '' },
            { Question: 'Bank routing number_2_es_:signer', Value: '' },
            { Question: 'Amount_es_:signer', Value: '' },
            { Question: 'Check Box6_es_:signer', Value: '' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Confidentiality and Protection of Health Info',
          'Form Serial': 'e4u45n828yid',
          'Submit Date': '07/22/2020 04:40 PM',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Associate Name_2', Value: 'Makayla Emanuele' },
            { Question: 'Date_2', Value: '07/22/2020' },
            {
              Question: 'Signature9_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'HIPAA Confidentiality Agreement',
          'Form Serial': 'e4u45n8u6f57',
          'Submit Date': '07/22/2020 04:40 PM',
          Questions: [
            {
              Question: 'employee_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Corporate Compliance Statement',
          'Form Serial': 'e4u45n82b7cp',
          'Submit Date': '07/22/2020 04:40 PM',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'PPE Statement',
          'Form Serial': 'e4u45n8aqn9i',
          'Submit Date': '07/22/2020 04:41 PM',
          Questions: [
            {
              Question: 'Printed Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'PositionTitle_es_:signer',
              Value: 'Occupational Therapist PRN',
            },
            {
              Question: 'Signature6_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Annual TB Screening',
          'Form Serial': 'e4u45n8psvwq',
          'Submit Date': '07/22/2020 04:42 PM',
          Questions: [
            { Question: 'Cough_es_:signer:date', Value: 'No' },
            {
              Question: 'Blood Streaked Sputum (phlegm)_es_:signer:date',
              Value: 'No',
            },
            {
              Question: 'Unexplained Weight Loss_es_:signer:date',
              Value: 'No',
            },
            { Question: 'Fever_es_:signer:date', Value: 'No' },
            { Question: 'Night Sweats_es_:signer:date', Value: 'No' },
            {
              Question: 'Unexplained Loss of Appetite_es_:signer:date',
              Value: 'No',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Signature1_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Influenza Vaccination',
          'Form Serial': 'e4u45n89qngi',
          'Submit Date': '07/22/2020 04:43 PM',
          Questions: [
            {
              Question: 'Employee Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Influenza Vaccination Choices',
              Value: 'Request that I receive the Influenza vaccine',
            },
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Electronic Signature Statement',
          'Form Serial': 'e4u45n82sq33',
          'Submit Date': '07/22/2020 04:44 PM',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Associate Tablet Agreement',
          'Form Serial': 'e4u45n8j3ekq',
          'Submit Date': '07/22/2020 04:44 PM',
          Questions: [
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Associate Print Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Caregiver Notice of COVID-19 Risk',
          'Form Serial': 'e4u45n83izgv',
          'Submit Date': '07/22/2020 04:46 PM',
          Questions: [
            { Question: 'Initials_es_:signer:initials', Value: 'ME' },
          ],
        },
        {
          'Form Name': 'Mutual Arbitration Agreement',
          'Form Serial': 'e4u45n8joo1j',
          'Submit Date': '07/22/2020 04:48 PM',
          Questions: [
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'DATE_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'APPLICANTEMPLOYEE NAME PRINTED_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Caregiver Waiver for COVID19',
          'Form Serial': 'e4u45n869v41',
          'Submit Date': '07/22/2020 04:49 PM',
          Questions: [
            {
              Question: 'Caregiver Name_es_:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'date_es_:date', Value: '07/22/2020' },
            {
              Question: 'caregiver signature_es_:signer1:signature',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'caregiver date_es_:signer1:date',
              Value: '07/22/2020',
            },
            {
              Question: 'representative signature_es_:signer2:signature',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'representative date_es_:signer2:date',
              Value: '07/22/2020',
            },
            {
              Question: 'representative printed name_es_:signer2:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'representative title_es_:signer2:title',
              Value: 'OTR/L',
            },
          ],
        },
        {
          'Form Name': 'Associate Photo Release Authorization',
          'Form Serial': 'e4u45n8uifs0',
          'Submit Date': '07/22/2020 05:02 PM',
          Questions: [
            {
              Question: 'Signature1_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Print name_es_:signer', Value: 'Makayla Emanuele' },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Associate Certification of Lack of Exposure',
          'Form Serial': 'e4u45n8edqtn',
          'Submit Date': '07/22/2020 05:04 PM',
          Questions: [
            { Question: 'first name', Value: 'Makayla' },
            { Question: 'last name', Value: 'Emanuele' },
            { Question: 'question', Value: 'Yes' },
            { Question: 'associate Signature', Value: 'Makayla Emanuele' },
            { Question: 'date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'Florida Motor Vehicle Record Consent',
          'Form Serial': 'e4u45n8h69l6',
          'Submit Date': '07/22/2020 05:07 PM',
          Questions: [
            { Question: 'Printed Name', Value: 'Makayla Emanuele' },
            { Question: 'Date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Hepatitis B Vaccination',
          'Form Serial': 'e4u45n8ydlu7',
          'Submit Date': '07/22/2020 06:22 PM',
          Questions: [
            {
              Question: 'Employee Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Hepatitis B Vaccination Choices',
              Value: 'Provide written proof of previous vaccination',
            },
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            { Question: 'Date_es_:signer:date', Value: '07/22/2020' },
            {
              Question: 'Signature_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Conflict Of Interest',
          'Form Serial': 'e4u45n8b0n3m',
          'Submit Date': '07/22/2020 06:44 PM',
          Questions: [
            {
              Question: 'with the Agency 1',
              Value:
                'Full time OT with Encore Rehabilitation Services and affiliated with Douglas T Jacobson Veterans Nursing',
            },
            { Question: 'with the Agency 2', Value: 'Home in Port Charlotte.' },
            { Question: 'with the Agency 3', Value: '' },
            { Question: 'with the Agency 4', Value: '' },
            { Question: 'Printed Name', Value: 'Makayla Emanuele' },
            { Question: 'Date', Value: '07/22/2020' },
            {
              Question: 'Signature5_es_:signer:signature',
              Value: 'Makayla Emanuele',
            },
          ],
        },
        {
          'Form Name': 'Job Acceptance Statement',
          'Form Serial': 'e4u45n8gfk44',
          'Submit Date': '07/22/2020 06:45 PM',
          Questions: [
            { Question: 'Associate name', Value: 'Makayla Emanuele' },
            { Question: 'Date', Value: '07/22/2020' },
          ],
        },
        {
          'Form Name': 'New Hire Payroll Form',
          'Form Serial': 'e4u45n846aon',
          'Submit Date': '08/03/2020 02:15 PM',
          User: 'Jessica Erb',
          Questions: [
            {
              Question: 'Associate Name_es_:signer:fullname',
              Value: 'Makayla Emanuele',
            },
            {
              Question: 'Job Title_es_:signer:title',
              Value: 'Occupational Therapist PRN',
            },
            {
              Question: 'Associate Rate of Pay_es_:signer',
              Value:
                '$60/visit initial evaluation, $50/treatment visits /visit',
            },
            {
              Question: 'Associate Email_es_:signer:email',
              Value: 'makaylaemanuele@gmail.com',
            },
          ],
        },
        {
          'Form Name': '2020 - W4 Federal Employee Withholding',
          'Form Serial': 'e4u45n8a3hes',
          'Submit Date': '08/03/2020 02:17 PM',
          User: 'Jessica Erb',
          Questions: [
            {
              Question: "Employers Only - Employer's name and address",
              Value:
                'Care Connections at Home, LLC 6151 Lake Osprey Dr, Suite #300, Sarasota, Florida 34240',
            },
            {
              Question: 'Employers Only - First date of Employment',
              Value: '07/21/2020',
            },
            {
              Question: 'Employers Only - Employer identification number (EIN)',
              Value: '84-2657754',
            },
          ],
        },
        {
          'Form Name': 'Caregiver Notice of COVID-19 Risk',
          'Form Serial': 'e4u45n83izgv',
          'Submit Date': '08/03/2020 03:04 PM',
          User: 'Jessica Erb',
          Questions: [{ Question: 'Field1', Value: '' }],
        },
        {
          'Form Name': 'Hepatitis B Vaccination',
          'Form Serial': 'e4u45n8ydlu7',
          'Submit Date': '08/03/2020 03:05 PM',
          User: 'Jessica Erb',
          Questions: [{ Question: 'Field1', Value: '' }],
        },
        {
          'Form Name': 'Influenza Vaccination',
          'Form Serial': 'e4u45n89qngi',
          'Submit Date': '08/03/2020 03:05 PM',
          User: 'Jessica Erb',
          Questions: [{ Question: 'Field1', Value: '' }],
        },
        {
          'Form Name': 'Annual TB Screening',
          'Form Serial': 'e4u45n8psvwq',
          'Submit Date': '08/03/2020 03:06 PM',
          User: 'Jessica Erb',
          Questions: [
            {
              Question: 'Signature2_es_:signer2:signature',
              Value: 'Jessica Erb, RN',
            },
          ],
        },
        {
          'Form Name': 'I-9 with Employer Sections',
          'Form Serial': 'e4u45n8u3t9h',
          'Submit Date': '08/03/2020 03:10 PM',
          User: 'Jessica Erb',
          Questions: [
            { Question: 'Employee Last Name', Value: 'Emanuele' },
            { Question: 'Employee First Name', Value: 'Makayla' },
            { Question: 'Employee Middle Initial', Value: '' },
            { Question: 'Citizenship', Value: '1' },
            { Question: 'List A Document Title 1', Value: '' },
            {
              Question: 'List B Document Title',
              Value: 'Driver&apos;s License',
            },
            {
              Question: 'List C Document Title',
              Value: 'Social Security Card',
            },
            { Question: 'List A Issuing Authority 1', Value: '' },
            {
              Question: 'List B Issuing Authority',
              Value: 'State of Virginia',
            },
            {
              Question: 'List C Issuing Authority',
              Value: 'Department of Health and Human Services USA',
            },
            { Question: 'List A Document Number 1', Value: '' },
            { Question: 'List B Document Number', Value: 'A60614041' },
            { Question: 'List C Document Number', Value: '228-67-8105' },
            { Question: 'List A Expiration Date 1', Value: '' },
            { Question: 'List B Expiration Date', Value: '02/19/2021' },
            { Question: 'List C Expire Date', Value: '' },
            { Question: 'List A Document Title 2', Value: '' },
            { Question: 'List A Issuing Authority 2', Value: '' },
            { Question: 'Additional Information', Value: '' },
            { Question: 'List A Document Number 2', Value: '' },
            { Question: 'List A Expiration Date 2', Value: '' },
            { Question: 'List A Document Title 3', Value: '' },
            { Question: 'List A Issuing Authority 3', Value: '' },
            { Question: 'List A Document Number 3', Value: '' },
            { Question: 'List A Expiration Date 3', Value: '' },
            {
              Question: "Employee's First Day of Employment",
              Value: '07/24/2020',
            },
            { Question: 'Employer Signature', Value: 'Kionne Thomas' },
            { Question: 'Employer Signature Date', Value: '08/03/2020' },
            {
              Question: 'Title of Employer',
              Value: 'Administrative Office Coordinator',
            },
            { Question: 'Last Name of Employer', Value: 'Thomas' },
            { Question: 'First Name of Employer', Value: 'Kionne' },
            { Question: 'Business Name', Value: 'Care Connections At Home' },
            {
              Question: "Employer's Address",
              Value: '6151 Lake Osprey Drive, Suite 300',
            },
            { Question: 'Employer City', Value: 'Sarasota' },
            { Question: 'Employer State', Value: 'FL' },
            { Question: 'Employer Zip Code', Value: '34240' },
            { Question: 'Rehire Last Name', Value: '' },
            { Question: 'Rehire First Name', Value: '' },
            { Question: 'Rehire Middle Initial', Value: '' },
            { Question: 'Date of Rehire', Value: '' },
            { Question: 'Rehire Document Title', Value: '' },
            { Question: 'Rehire Document Number', Value: '' },
            { Question: 'Rehire Expiration Date', Value: '' },
            { Question: 'Rehire Signature', Value: '' },
            { Question: 'Rehire Date', Value: '' },
            { Question: 'Employer Name Rehire field', Value: '' },
          ],
        },
      ],
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
      { key: 'Questionnaires[]Questions[]Question' },
      { key: 'Questionnaires[]Questions[]Value' },
      { key: 'Forms[]Form Name' },
      { key: 'Forms[]Form Serial' },
      { key: 'Forms[]Submit Date' },
      { key: 'Forms[]User' },
      { key: 'Forms[]Questions[]Question' },
      { key: 'Forms[]Questions[]Value' },
    ],
  },
  key: 'find_hire',
  noun: 'hire',
  display: {
    label: 'Find Hire',
    description:
      'Finds the detailed information for a hire in applicantStack given a Hire serial',
    hidden: false,
    important: true,
  },
};
