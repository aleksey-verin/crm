// const fetchRequest = async (
//   start = '',
//   end = '',
//   offset = 0,
//   search = '',
//   in_out = '',
//   from_type = '',
//   person_id = '',
//   sources = '',
//   errors = ''
// ) => {
//   let _url = new URL('https://api.skilla.ru/mango/getList');

//   if (start || end) {
//     _url.searchParams.append('date_start', start);
//     _url.searchParams.append('date_end', end);
//   }
//   if (offset) {
//     _url.searchParams.append('offset', offset);
//   }
//   if (search) {
//     _url.searchParams.append('search', search);
//   }
//   if (in_out) {
//     _url.searchParams.append('in_out', in_out);
//   }
//   if (from_type) {
//     _url.searchParams.append('from_type[] ', from_type);
//   }
//   if (person_id) {
//     _url.searchParams.append('from_persons[]', person_id);
//   }
//   if (sources) {
//     _url.searchParams.append('sources[]', sources);
//   }
//   if (errors) {
//     _url.searchParams.append('errors[]', errors);
//   }

//   try {
//     const response = await fetch(_url, {
//       method: 'POST',
//       headers: headersList
//     });
//     if (response.ok) {
//       return await response.json();
//     } else {
//       console.log('err');
//       throw new Error('some err');
//     }
//   } catch (error) {
//     console.log('other err');
//   }
// };

// export default fetchRequest;

export const createUrl = ({
  date_start = '',
  date_end = '',
  offset = 0,
  search = '',
  in_out = '',
  from_type = '',
  from_persons = '',
  sources = '',
  errors = ''
}) => {
  let _url = new URL('https://api.skilla.ru/mango/getList');

  if (date_start || date_end) {
    _url.searchParams.append('date_start', date_start);
    _url.searchParams.append('date_end', date_end);
  }
  if (offset) {
    _url.searchParams.append('offset', String(offset));
  }
  if (search) {
    _url.searchParams.append('search', search);
  }
  if (in_out) {
    _url.searchParams.append('in_out', in_out);
  }
  if (from_type) {
    _url.searchParams.append('from_type[]', from_type);
  }
  if (from_persons) {
    _url.searchParams.append('from_persons[]', from_persons);
  }
  if (sources) {
    _url.searchParams.append('sources[]', sources);
  }
  if (errors) {
    _url.searchParams.append('errors[]', errors);
  }
  return _url;
};
