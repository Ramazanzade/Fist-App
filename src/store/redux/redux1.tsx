export const setData = (data:any) => {
  return { type: 'SET_DATA', payload: data };
};

export const setCurrentDate = (date:any) => {
  return { type: 'SET_CURRENT_DATE', payload: date };
};