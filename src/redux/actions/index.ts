export const SAVE_USER = 'SAVE_USER';

export const saveUser = (email: string) => ({
  type: SAVE_USER,
  payload: email,
});
