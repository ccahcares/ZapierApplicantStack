import Authentication from './authentication';
import newHireTrigger from './triggers/new_hire';
import hireDetailsTrigger from './triggers/hire_details';
import newJobsTrigger from './triggers/new_jobs.';
import jobDetailsTrigger from './triggers/job_details.js';
import candidateDetailsTrigger from './triggers/candidate_details';
import newCandidateTrigger from './triggers/new_candidate';
import allHiresTrigger from './triggers/all_hires';
import updateHireCreate from './creates/update_hire_stage';
import findHireSearch from './searches/find_hire';
import allHiresSearch from './searches/all_hires.js';

import Recipe from './resources/recipe';
import { version } from '../package.json';
import { version as platformVersion } from 'zapier-platform-core';

const App = {
  version,
  platformVersion,

  authentication: authentication,

  beforeRequest: [],

  afterResponse: [],

  resources: {
    [Recipe.key]: Recipe
  },

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

  creates: {
    [updateHireCreate.key]: updateHireCreate
  }
};

export default App;