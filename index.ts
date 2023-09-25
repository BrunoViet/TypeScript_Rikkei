// //Bai 1
// function findTwoSum(nums: number[], target: number): number[] | null {
//   // Sắp xếp mảng nums
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     const sum = nums[left] + nums[right];
//     if (sum === target) {
//       console.log(nums[right])
//       return [nums.indexOf(nums[left]), nums.indexOf(nums[right])];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return null;
// }

// // Sử dụng hàm findTwoSum
// const nums = [2, 4, 25, 7, 4];
// const target = 8;
// const result1 = findTwoSum(nums, target);

// if (result1) {
//   console.log(result1);
// } else {
//   console.log("Không tìm thấy hai số thỏa mãn.");
// }


//Bai 2

function isValid(s: string): boolean {
  const stack: string[] = [];
  const openBrackets = '([{';
  const closeBrackets = ')]}';

  for (const char of s) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const lastOpenBracket: any = stack.pop();
      if (!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Kiểm tra ví dụ
const input = "{}[]";
const result = isValid(input);
console.log(result);

//Cau 3
// function isPalindrome(s: string): boolean {
//   // Chuyển tất cả các chữ hoa thành chữ thường và loại bỏ ký tự không phải chữ và không phải số
//   const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

//   // So sánh chuỗi gốc với chuỗi đảo ngược
//   return cleanedString === cleanedString.split('').reverse().join('');
// }

// // Kiểm tra hàm với một ví dụ
// const inputString = "A man, a plan, a canal, Panama";
// const result3 = isPalindrome(inputString);
// console.log(result3); // Kết quả sẽ là true

