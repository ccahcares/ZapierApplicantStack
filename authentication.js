const testAuth = (z, bundle) => {
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
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  type: 'custom',
  test: testAuth,
  fields: [
    {
      computed: false,
      key: 'domain',
      required: true,
      label: 'Domain',
      type: 'string',
      helpText: 'The subdomain that ApplicantStack uses for your company',
      inputFormat: 'https://{{input}}.applicantstack.com',
      default: '{{process.env.DOMAIN}}',
    },
    {
      computed: false,
      key: 'Publisher',
      required: true,
      label: 'Publisher',
      type: 'string',
      helpText:
        "A Publisher name should be passed in as well. This helps the ApplicantStack customer to see who is making the changes to their account through the API. This should be the name of your software so that the customer will recognize it. The Publisher's name is not configured anywhere, and you may use whatever you like. You will send the Publisher name through the Publisher parameter of the header.",
      default: '{{process.env.PUBLISHER}}',
    },
    {
      computed: false,
      key: 'Token',
      required: true,
      label: 'API Token',
      type: 'string',
      helpText:
        'Authentication Token found in DOMIAN.applicantstack.com/settings/show',
      default: '{{process.env.TOKEN}}',
    },
  ],
  connectionLabel: 'Get Hires',
  customConfig: {},
};
