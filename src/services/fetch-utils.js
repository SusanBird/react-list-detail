import { client, checkError } from './client';

export async function getBestsellers(page) {
  const numPerPage = 20;

  const start = (page - 1) * numPerPage;

  const response = await client
    .from('bestsellers')
    .select('*', { count: 'exact' })
    .range(start, start + numPerPage - 1);

  const lastPage = Math.ceil(response.count / numPerPage);

  return { ...response, lastPage };
}



export async function getBestsellerById(id) {
  const response = await client
    .from('bestsellers')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}

//working on netlify deploy