const authentication = require('./authentication');
const newHireTrigger = require('./triggers/new_hire.js');
const hireDetailsTrigger = require('./triggers/hire_details.js');
const newJobsTrigger = require('./triggers/new_jobs.js');
const jobDetailsTrigger = require('./triggers/job_details.js');
const newCandidateTrigger = require('./triggers/new_candidate.js');
const candidateDetailsTrigger = require('./triggers/candidate_details.js');
const allHiresTrigger = require('./triggers/all_hires.js');
const updateHireCreate = require('./creates/update_hire_stage.js');
const findHireSearch = require('./searches/find_hire.js');
const allHiresSearch = require('./searches/all_hires.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [newHireTrigger.key]: newHireTrigger,
    [hireDetailsTrigger.key]: hireDetailsTrigger,
    [newJobsTrigger.key]: newJobsTrigger,
    [jobDetailsTrigger.key]: jobDetailsTrigger,
    [newCandidateTrigger.key]: newCandidateTrigger,
    [candidateDetailsTrigger.key]: candidateDetailsTrigger,
    [allHiresTrigger.key]: allHiresTrigger,
  },
  searches: {
    [findHireSearch.key]: findHireSearch,
    [allHiresSearch.key]: allHiresSearch,
  },
  creates: { [updateHireCreate.key]: updateHireCreate },
};
