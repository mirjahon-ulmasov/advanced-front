import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    first: 'Mirjahon',
    lastname: 'Ulmasov',
    age: 24,
    country: Country.Uzbekistan,
    currency: Currency.USD,
    username: 'mirjahon',
};

describe('validateProfileData', () => {
    test('correct data', () => {
        const results = validateProfileData(data);

        expect(results).toEqual([]);
    });

    test('incorrect first or lastname', () => {
        const results = validateProfileData({ ...data, first: undefined });

        expect(results).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', () => {
        const results = validateProfileData({ ...data, age: undefined });

        expect(results).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect all', () => {
        const results = validateProfileData({});

        expect(results).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('no data', () => {
        const results = validateProfileData();

        expect(results).toEqual([ValidateProfileError.NO_DATA]);
    });
});
