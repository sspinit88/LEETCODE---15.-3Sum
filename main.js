/*
15. 3Sum

Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

/*
Ваша задача - найти все тройки чисел в массиве, которые в сумме дают 0. Обратите внимание, что решение не должно содержать дублирующихся троек.

Вот шаги, которые мы будем следовать:

1. Сначала отсортируйте массив.
2. Затем для каждого элемента nums[i] используйте два указателя, чтобы найти пару, которая в сумме дает -nums[i].
3. Перемещайте указатели, пока они не встретятся, и пропустите дубликаты.
4. Пропустите дубликаты для nums[i].



Your task is to find all triplets in the array that add up to 0. Note that the solution must not contain duplicate triplets.

Here are the steps we will follow:

1. First, sort the array.
2. Then for each element nums[i], use two pointers to find a pair that sums to -nums[i].
3. Move the pointers until they meet, and skip duplicates.
4. Skip duplicates for nums[i].

*/

function threeSum(nums) {
    // Сортируем массив
    // Sort the array
    nums.sort((a, b) => a - b);
    let result = [];

    // Для каждого элемента nums[i]
    // For each element nums[i]
    for (let i = 0; i < nums.length - 2; i++) {
        // Пропустить дубликаты для nums[i]
        // Skip duplicates for nums[i]
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Используем два указателя, чтобы найти пару, которая в сумме дает -nums[i]
        // Use two pointers to find a pair that sums to -nums[i]
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Пропустить дубликаты для nums[left] и nums[right]
                // Skip duplicates for nums[left] and nums[right]
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    // Возвращаем результат
    // Return the result
    return result;
}