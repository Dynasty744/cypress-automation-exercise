const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const responseSchema = require('../schemas/userResponseSchema');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

function validateResponse(response) {
    const validate = ajv.compile(responseSchema);
    const valid = validate(response);

    if (!valid) {
        const errors = validate.errors.map(error => {
          const path = error.instancePath.split('/').filter(Boolean);

          let failedValue = response;
          for (const key of path) {
            failedValue = failedValue[key];
          }
            return `${error.instancePath} ${error.message} (failed value: ${JSON.stringify(failedValue)})`;
        });
        throw new Error(`Schema validation failed:\n${errors.join('\n')}`);
    }
}

module.exports = { validateResponse };
