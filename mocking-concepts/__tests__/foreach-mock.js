// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// const arr = [10, 20, 30];

// // forEach(arr, (data) => {
// //   console.log(data);
// // });

// test('test forEach function', () => {
//   const mockCallback = jest.fn((x) => 42 + x);
//   forEach(arr, mockCallback);

//   expect(mockCallback.mock.calls.length).toBe(3);
//   expect(mockCallback.mock.calls[0][0]).toBe(10);
//   expect(mockCallback.mock.calls[1][0]).toBe(20);
//   expect(mockCallback.mock.results[0].value).toBe(52);
// });

// const a = new myMock();
// const b = {};
// const bound = myMock.bind(b);
// bound();

// console.log(myMock.mock.instances);
test('my mock', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(100);
  // console.log(myMock(), myMock(), myMock());
});
