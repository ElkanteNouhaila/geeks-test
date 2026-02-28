function minutesLived(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
  
    const diff = now - birth;
    const minutes = Math.floor(diff / (1000 * 60));
  
    return `You have lived approximately ${minutes} minutes.`;
  }
  
export default minutesLived;