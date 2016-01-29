var package_json_dependency_proposal_provider_1 = require('./providers/package/package-json-dependency-proposal-provider');
var tsconfig_json_files_proposal_provider_1 = require('./providers/tsconfig/tsconfig-json-files-proposal-provider');
var package_json_files_proposal_provider_1 = require('./providers/package/package-json-files-proposal-provider');
var babelrc_presets_proposal_provider_1 = require('./providers/babelrc/babelrc-presets-proposal-provider');
var babelrc_plugins_proposal_provider_1 = require('./providers/babelrc/babelrc-plugins-proposal-provider');
var tsconfig_json_schema_proposal_provider_1 = require('./providers/tsconfig/tsconfig-json-schema-proposal-provider');
var package_json_schema_proposal_provider_1 = require('./providers/package/package-json-schema-proposal-provider');
var bower_json_schema_proposal_provider_1 = require('./providers/bower/bower-json-schema-proposal-provider');
var babelrc_json_schema_proposal_provider_1 = require('./providers/babelrc/babelrc-json-schema-proposal-provider');
exports.defaultProviders = [
    new package_json_dependency_proposal_provider_1.default(),
    new tsconfig_json_files_proposal_provider_1.default(),
    new babelrc_presets_proposal_provider_1.default(),
    new babelrc_plugins_proposal_provider_1.default(),
    new package_json_files_proposal_provider_1.default()
];
exports.defaultSchemaProviders = [
    tsconfig_json_schema_proposal_provider_1.default,
    package_json_schema_proposal_provider_1.default,
    bower_json_schema_proposal_provider_1.default,
    babelrc_json_schema_proposal_provider_1.default
];
