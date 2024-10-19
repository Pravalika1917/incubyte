export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }


  let delimiter = ",";
  let numberString = numbers;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2);
    numberString = parts.slice(1).join("\n");
  }

  
  const nums = numberString.split(new RegExp(`[${delimiter}\n]+`)).map(Number);

  const negatives = nums.filter(num => num < 0);
  if (negatives?.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return nums.reduce((sum, num) => sum + num, 0);
}
