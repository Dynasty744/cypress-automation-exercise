const userSchema = {
  type: 'object',
  properties: {
    address1: { type: 'string' },
    address2: { type: 'string' },
    birth_day: { type: 'string' },
    birth_month: { type: 'string' },
    birth_year: { type: 'string' },
    city: { type: 'string' },
    company: { type: 'string' },
    country: { type: 'string' },
    email: { type: 'string', format: 'email' },
    first_name: { type: 'string' },
    id: { type: 'number' },
    last_name: { type: 'string' },
    name: { type: 'string' },
    state: { type: 'string' },
    title: { type: 'string' },
    zipcode: { type: 'string' }
  },
  required: [
    'address1', 'address2', 'birth_day', 'birth_month', 'birth_year', 'city', 'company', 'country',
    'email', 'first_name', 'id', 'last_name', 'name', 'state', 'title', 'zipcode'
  ],
  additionalProperties: false
};

const responseSchema = {
  type: 'object',
  properties: {
    responseCode: { type: 'number', const: 200 },
    user: userSchema
  },
  required: ['responseCode', 'user'],
  additionalProperties: false
};

module.exports = responseSchema;
