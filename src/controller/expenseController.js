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

export async function editExpense(id) {
  try {
    const response = await api.put(`expense/${id}`);

    return console.log(response);
  } catch (error) {
    return console.log(error);
  }
}
