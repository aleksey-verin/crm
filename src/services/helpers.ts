import { ICalls, IEmployees } from '../store/types';
import { menuItemTypes } from './constants';
import mockPersons from './mockData';

export function formatPhoneNumber(phone: string) {
  phone = phone.replace(/[^\d]/g, '');
  // для реального API
  if (phone.length == 11) {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2) $3-$4');
  }
  // для тестового API
  if (phone.length === 5) {
    return phone.replace(/(\d{1})(\d{2})(\d{2})/, '+$1($2*) *$3-****');
  }

  return null;
}

export function getImageCall(
  in_out: number,
  status: string
): 'income' | 'outcome' | 'inc-missed' | 'out-missed' {
  const call = { success: 'Дозвонился', missed: 'Не дозвонился' };
  let result;
  if (in_out) {
    status === call.success ? (result = 'income') : (result = 'inc-missed');
  } else {
    status === call.success ? (result = 'outcome') : (result = 'out-missed');
  }
  return result as 'income' | 'outcome' | 'inc-missed' | 'out-missed';
}

export const getEmployeesFromData = (data: ICalls[]): IEmployees[] => {
  const arrayUniqueById = [...new Map(data.map((item) => [item.person_id, item])).values()];
  const newArray = arrayUniqueById.map((item) => {
    return {
      name: `${item.person_name} ${item.person_surname.slice(0, 1)}.`,
      request: String(item.person_id),
      id: item.person_id,
      person_name: item.person_name,
      person_surname: item.person_surname,
      person_avatar: item.person_avatar
    };
  });
  const mockDataPersons = newArray.map((item, index) => {
    if (item.person_name === '**' && item.person_surname === '**') {
      item.person_name = mockPersons[index].person_name;
      item.person_surname = mockPersons[index].person_surname;
      item.name = `${item.person_name} ${item.person_surname.slice(0, 1)}.`;
    }
    return item;
  });
  return mockDataPersons;
};

export const getEmployeesList = (
  firstItem: menuItemTypes[],
  list: IEmployees[]
): menuItemTypes[] => {
  const employeesItems = list.map((item) => ({
    name: item.name,
    request: item.request
  })) as menuItemTypes[];
  if (employeesItems) {
    return [...firstItem, ...employeesItems];
  }
  return firstItem;
};
