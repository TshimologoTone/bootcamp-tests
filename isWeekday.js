function isWeekday(day) {
    // List of weekend days
    const weekendDays = ['Saturday', 'Sunday'];
  
    // Check if the input day is not included in the weekendDays array
    return !weekendDays.includes(day);
  }