const foo = 1;
const obj = {
  arr           : [1, 2, 3],
  obj_inner1    : { empty: true },
  long_fun_name : function f() {
    return 42;
  },
  obj_inner2: { empty: true },
};

console.log(obj, foo); /* eslint-disable-line no-console */
