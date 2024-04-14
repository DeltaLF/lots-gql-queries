export const intToPId = (id: number) => `p_${id}`;

export const getRandomNFromArr = <T>(arr: T[], n: number): T[] => {
  const N = Math.min(arr.length, n);
  const randArr = Array(N)
    .fill(0)
    .map((_, ind) => ind);
  for (let i = 0; i < N; i++) {
    const randInd = Math.floor(Math.random() * N);
    [randArr[i], randArr[randInd]] = [randArr[randInd], randArr[i]];
  }
  const res: T[] = [];
  for (let i = 0; i < N; i++) {
    res.push(arr[randArr[i]]);
  }
  return res;
};

export const fromArrWithKeyToMap = <T>(
  arr: T[],
  key: string
): Map<string, T> => {
  const map = new Map<string, T>();
  arr.forEach((obj) => {
    map.set(obj[key], obj);
  });

  return map;
};
