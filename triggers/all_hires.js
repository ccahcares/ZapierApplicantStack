const makeCall = (z, page) => {
  let options = {
    url: `https://${bundle.authData.domain}.applicantstack.com/o/api/hires/${
      page
    }`,
    method: 'GET',
    headers: {
      Token: bundle.authData.Token,
      Publisher: bundle.authData.Publisher,
    },
    params: {},
  };

  return z.request(options);
};

const perform = async (z, bundle) => {
  
    let response = await makeCall(z, 1);

    let results = response.data; // response.json if you're using core v9 or older

    let pages = results.numPages;


    for (let i = 1; i <= pages; i++) {
      promises.push(makeCall(z, i));
    }

    // send requests concurrently
    const responses = await Promise.all(promises);
    return responses.map((res) => res.data);
};


module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'stage',
        type: 'string',
        label: 'Stage',
        dynamic: 'new_hire.Stage',
        required: false,
        list: true,
        altersDynamicFields: true,
      },
    ],
    canPaginate: true,
  },
  key: 'all_hires',
  noun: 'Hires',
  display: {
    label: 'All Hires',
    description: 'This gets all hires from applicantStack filtered by stage',
    hidden: false,
    important: true,
  },
};
