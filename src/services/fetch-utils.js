import { client, checkError } from './client';

export async function getBestseller() {
  const response = await client
    .from('bestsellers')
    .select();

  return response.body;
}



export async function getBestsellerById(id) {
  const response = await client
    .from('bestsellers')
    .select()
    .match({ id })
    .single();
    
  return checkError(response);
}