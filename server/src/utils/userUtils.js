function summarizeUserInfo(userInfo) {
    const weightDiff = userInfo.userInfo.weight - userInfo.userInfo.goalWeight;
    const weeklyGoal = (weightDiff / userInfo.userInfo.timeline).toFixed(2);
    
    return `Name: ${userInfo.username}, Age: ${userInfo.userInfo.age}, Height: ${userInfo.userInfo.height} inches, Current Weight: ${userInfo.userInfo.weight} lbs, Goal Weight: ${userInfo.userInfo.goalWeight} lbs, Timeline: ${userInfo.userInfo.timeline} weeks, BMI: ${userInfo.userInfo.bmi}. They want to ${weightDiff > 0 ? 'lose' : 'gain'} ${Math.abs(weightDiff)} lbs at a rate of ${Math.abs(weeklyGoal)} lbs per week.`;
}

module.exports = { summarizeUserInfo }; 