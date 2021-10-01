import api from '~/api';

export async function createNewExpense(expense) {
  try {
    await api.post(`expenses`, expense);

    return { shouldContinue: true };
  } catch (error) {
    return { shouldContinue: false };
  }
}

export async function getExpenses() {
  try {
    const response = await api.get('expenses?page=1&perPage=10');

    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteExpense(id) {
  try {
    const response = await api.delete(`/expenses/${id}`);

    return response;
  } catch (error) {
    return console.log(error);
  }
}
