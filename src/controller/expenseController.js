/* eslint-disable no-underscore-dangle */
import dayjs from 'dayjs';
import api from '~/api';

export async function createNewExpense(expense) {
  try {
    const response = await api.post(`expenses`, expense);

    return { shouldContinue: true, id: response.data };
  } catch (error) {
    return { shouldContinue: false };
  }
}

export async function getExpenses() {
  try {
    const response = await api.get('expenses?page=1&perPage=20');

    return response.data.sort((a, b) => dayjs(b.date).diff(dayjs(a.date), 'd'));
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteExpense(id) {
  try {
    const response = await api.delete(`expenses/${id}`);

    return response;
  } catch (error) {
    return console.log(error);
  }
}

export async function editExpense(id, expense) {
  try {
    await api.put(`expenses/${id}`, expense);

    return { shouldContinue: true };
  } catch (error) {
    return { shouldContinue: false };
  }
}
