//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let nums = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while


/*let i = 0;
while (i<nums.length){
    console.log(nums[i])
    i++;
}*/

// 2. перебрати його циклом for

/*for (let num of nums) {
    console.log(num);
}*/

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

/*let i = 0;
while (i<nums.length){
    if (i%2 !== 0){
        console.log(nums[i]);
    }
    i++;
}*/

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

/*for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i%2 !== 0){
        console.log(num)
    }
}*/

// 5. перебрати циклом while та вивести  числа тільки парні  значення

/*let i=0;
while (i<nums.length){
    if (nums[i]%2 == 0){
        console.log(nums[i]);
    }
    i++;
}*/

// 6. перебрати циклом for та вивести  числа тільки парні  значення

/*for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num%2 === 0){
        console.log(num);
    }
}*/

// 7. замінити кожне число кратне 3 на слово "okten"

/*for (let num of nums){
    if (num%3 === 0) {
        num = `okten`;
    }
    console.log(num);
}*/

// 8. вивести масив в зворотньому порядку.

/*for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    console.log(nums[i]);
}*/

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//9.1 перебрати його циклом while

/*
let i = nums.length-1;
while (i>=0){
    console.log(nums[i]);
    i--;
}*/

//9.2. перебрати його циклом for

/*
for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    console.log(num)

}*/


//9.3 перебрати циклом while та вивести  числа тільки з непарним індексом

/*let i = nums.length-1;
while (i>=0){
    if (i%2 !== 0){
        console.log(nums[i]);
    }
    i--;
}*/

//9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

/*
for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if ([i]%2 !== 0){
        console.log(num);
    }
}*/

//9.5. перебрати циклом while та вивести  числа тільки парні  значення

/*
let i=nums.length-1;
while (i>=0){
    if (nums[i]%2===0){
    console.log(nums[i]);
    }
    i--
}*/

//9.6. перебрати циклом for та вивести  числа тільки парні  значення

/*for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if (num%2 ===0){
        console.log(num);
    }
}*/


