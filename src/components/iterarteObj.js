var cars = {
  label: "Autos",
  subs: [
    {
      label: "SUVs",
      subs: [],
    },
    {
      label: "Trucks",
      subs: [
        {
          label: "2 Wheel Drive",
          subs: [],
        },
        {
          label: "4 Wheel Drive",
          subs: [
            {
              label: "Ford",
              subs: [],
            },
            {
              label: "Chevrolet",
              subs: [],
            },
          ],
        },
      ],
    },
    {
      label: "Sedan",
      subs: [],
    },
  ],
};

const iterate = (obj) => {
  const stack = [obj];
  while (stack?.length > 0) {
    const currentObj = stack.pop();
    Object.keys(currentObj).forEach((key) => {
      console.log(`key: ${key}, value: ${currentObj[key]}`);
      if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
        stack.push(currentObj[key]);
      }
    });
  }
  return stack;
};

const iterate1 = (obj) => {
  const stack = [obj];
  while (stack?.length > 0) {
    const currentObj = stack.pop();
    // console.log(currentObj);
    Object.keys(currentObj).forEach((key) => {
      if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
        stack.push(currentObj[key]);
        console.log(stack);
      }
    });
  }
  return stack;
};

// console.log(iterate1(cars));

const numObj = {
  a: 10,
  b: {
    c: 15,
    d: -1,
    e: {
      f: 10,
      g: 0,
      j: {
        k: 10,
        l: {
          m: 99,
          n: 33,
          o: 0,
        },
      },
    },
    h: -5,
  },
  i: 18,
};

let resObj = {};
const removeSmallNum = (obj) => {
  console.log((obj["b"] = "xyz"));
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      removeSmallNum(obj[key]);
    } else {
      if (obj[key] > 0) {
        // let pair = { [key]: obj[key] };
        resObj = { ...resObj, ...{ [key]: obj[key] } };
      }
    }
  }
  return resObj;
};

console.log(removeSmallNum(numObj));
console.log(numObj);
