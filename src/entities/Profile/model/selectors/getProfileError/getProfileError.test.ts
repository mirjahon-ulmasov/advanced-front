import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Server error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('Server error');
    });
    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
