import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Mirjahon',
    lastname: 'Ulmasov',
    age: 24,
    country: Country.Uzbekistan,
    currency: Currency.USD,
    username: 'mirjahon',
};

describe('profileSlice.test', () => {
    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ first: 'MIRJAHON', lastname: 'ULMASOV' }),
        )).toEqual({
            form: { ...data, first: 'MIRJAHON', lastname: 'ULMASOV' },
        });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { ...data, age: 30, username: 'john' },
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
        });
    });

    test('updateProfileData thunk pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({ isLoading: true, validateErrors: undefined });
    });

    test('updateProfileData thunk fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.NO_DATA],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
