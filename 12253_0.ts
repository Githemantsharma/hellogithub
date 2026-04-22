import type { ServiceFormPlugin } from './_types';

const TYPE_OF_MODIFICATION = 'UK-FCL-03732_0';
const UPDATED_ADDRESS_DETAILS = 'UK-FCL-03736_0';
const UPDATED_EMAIL_ID = 'UK-FCL-03737_0';
const UPDATED_MOBILE_NUMBER = 'UK-FCL-03738_0';
const UPDATED_AREA_OF_OPERATION = 'UK-FCL-03739_0';

function matches(value: unknown, expected: string): boolean {
  return String(value ?? '').trim().toLowerCase() === expected.toLowerCase();
}

const plugin: ServiceFormPlugin = {
  isFieldVisible(fieldCode, values) {
    const modificationType = values[TYPE_OF_MODIFICATION];

    if (fieldCode === UPDATED_ADDRESS_DETAILS) {
      return matches(modificationType, 'Change in Address');
    }

    if (fieldCode === UPDATED_EMAIL_ID || fieldCode === UPDATED_MOBILE_NUMBER) {
      return matches(modificationType, 'Change in Contact Details');
    }

    if (fieldCode === UPDATED_AREA_OF_OPERATION) {
      return matches(modificationType, 'Change in Area of Operation');
    }

    return undefined;
  },
};

export default plugin;