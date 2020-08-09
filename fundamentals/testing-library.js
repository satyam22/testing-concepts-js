const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} should be equal to ${expected}`);
      }
    },
  };
};

const test = (testName, fn) => {
  try {
    fn();
    console.log(`✅ ${testName} passed`);
  } catch (error) {
    console.log(`🔴 ${testName} failed`);
}
};
module.exports = {
  expect,
  test,
};
