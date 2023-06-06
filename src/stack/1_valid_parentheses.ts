function isValid(s: string): boolean {
  const arr = s.split("");
  const stack = [];
  const symbolMap: { [key: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (const item of arr) {
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (symbolMap[item] !== top) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const a = isValid("{[()]}");
console.log("a", a);
const b = isValid("()");
console.log("b", b);
const c = isValid("()[]{}");
console.log("c", c);
const d = isValid("(]");
console.log("d", d);
const e = isValid("{[(])}");
console.log("e", e);
const f = isValid("]");
console.log("f", f);
const g = isValid(")(){}");
console.log("g", g); // false
const h = isValid("()");
console.log("h", h); // true
const i = isValid("(){}}{");
console.log("i", i); // false
