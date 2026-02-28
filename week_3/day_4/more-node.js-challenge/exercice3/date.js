function nextHoliday() {
    const now = new Date();
  
    const holidayName = "Christmas";
    const holidayDate = new Date(now.getFullYear(), 11, 25);
  
    if (holidayDate < now) {
      holidayDate.setFullYear(now.getFullYear() + 1);
    }
  
    const diff = holidayDate - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    return `Today is ${now.toDateString()}.\nThe next holiday (${holidayName}) is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
  }
  
export default nextHoliday;