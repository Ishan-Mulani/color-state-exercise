function choice(arr, ele) {
  const randIndex = Math.floor(Math.random() * arr.length);
  let newEle = arr[randIndex];
  return newEle == ele ? choice(arr, ele) : newEle;
}

export { choice };
