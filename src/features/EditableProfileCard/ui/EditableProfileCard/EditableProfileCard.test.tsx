import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentTestRender } from '@/shared/lib/componentTestRender/comopnentTestRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/consts/consts';
import { EditableProfileCard } from './EditableProfileCard';

describe('widgets/EditableProfileCard', () => {
	const data = {
		id: 'some user id',
		age: '22',
		username: 'admin',
		avatar: 'some avatar',
		lastname: 'admin',
		first: 'admin',
		city: 'Moscow',
		currency: Currency.RUB,
		country: Country.RUSSIA,
	};

	const options = {
		initialState: {
			profile: {
				data,
				formData: data,
				loading: false,
				readOnly: true,
			},
			user: {
				authData: {
					id: 'some user id',
				},
			},
		},
		asyncReducers: {
			profile: profileReducer,
		},
	};

	test('Be in the document', () => {
		componentTestRender(<EditableProfileCard />, options);
		expect(screen.getByTestId('EditableProfileCard')).toBeInTheDocument();
	});

	test('Toggle read only', async () => {
		componentTestRender(<EditableProfileCard />, options);

		expect(screen.queryByTestId('EditableProfileCard.SaveBtn')).not.toBeInTheDocument();
		expect(screen.queryByTestId('EditableProfileCard.CancelBtn')).not.toBeInTheDocument();

		await userEvent.click(screen.getByTestId('EditableProfileCard.EditBtn'));

		expect(screen.getByTestId('EditableProfileCard.SaveBtn')).toBeInTheDocument();
		expect(screen.getByTestId('EditableProfileCard.CancelBtn')).toBeInTheDocument();
	});

	test('Change inputs value', async () => {
		componentTestRender(<EditableProfileCard />, options);

		await userEvent.click(screen.getByTestId('EditableProfileCard.EditBtn'));

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Username'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Username'), 'user');
		expect(screen.getByTestId('EditableProfileCard.Username')).toHaveValue('user');

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Age'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Age'), '100');
		expect(screen.getByTestId('EditableProfileCard.Age')).toHaveValue('100');
	});

	test('Cancel edit', async () => {
		componentTestRender(<EditableProfileCard />, options);

		await userEvent.click(screen.getByTestId('EditableProfileCard.EditBtn'));

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Username'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Username'), 'user');
		expect(screen.getByTestId('EditableProfileCard.Username')).toHaveValue('user');

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Age'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Age'), '100');
		expect(screen.getByTestId('EditableProfileCard.Age')).toHaveValue('100');

		await userEvent.click(screen.getByTestId('EditableProfileCard.CancelBtn'));

		expect(screen.getByTestId('EditableProfileCard.Username')).toHaveValue('admin');

		expect(screen.getByTestId('EditableProfileCard.Age')).toHaveValue('22');
	});

	test('Validation error', async () => {
		componentTestRender(<EditableProfileCard />, options);

		await userEvent.click(screen.getByTestId('EditableProfileCard.EditBtn'));

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Username'));
		expect(screen.getByTestId('EditableProfileCard.Username')).toHaveValue('');

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Age'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Age'), 'some string');
		expect(screen.getByTestId('EditableProfileCard.Age')).toHaveValue('');

		await userEvent.click(screen.getByTestId('EditableProfileCard.SaveBtn'));

		expect(screen.getByTestId(`EditableProfileCard.${ValidateProfileError.INCORRECT_USERNAME}`)).toBeInTheDocument();
		expect(screen.getByTestId(`EditableProfileCard.${ValidateProfileError.INCORRECT_AGE}`)).toBeInTheDocument();

		await userEvent.click(screen.getByTestId('EditableProfileCard.CancelBtn'));

		expect(screen.queryByTestId(`EditableProfileCard.${ValidateProfileError.INCORRECT_USERNAME}`)).not.toBeInTheDocument();
		expect(screen.queryByTestId(`EditableProfileCard.${ValidateProfileError.INCORRECT_AGE}`)).not.toBeInTheDocument();
	});

	test('Send edited data', async () => {
		const mockedPutReq = jest.spyOn($api, 'put');
		componentTestRender(<EditableProfileCard />, options);

		await userEvent.click(screen.getByTestId('EditableProfileCard.EditBtn'));

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Username'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Username'), 'user');
		expect(screen.getByTestId('EditableProfileCard.Username')).toHaveValue('user');

		await userEvent.clear(screen.getByTestId('EditableProfileCard.Age'));
		await userEvent.type(screen.getByTestId('EditableProfileCard.Age'), '100');
		expect(screen.getByTestId('EditableProfileCard.Age')).toHaveValue('100');

		await userEvent.click(screen.getByTestId('EditableProfileCard.SaveBtn'));

		expect(mockedPutReq).toHaveBeenCalled();
	});
});
