export const fizzBuzz = (a: number) => {
  if (a % 15 === 0) return "BuzzFizz";
  if (a % 3 === 0) return "Fizz";
  if (a % 5 == 0) return "Buzz";

  return a;
};
