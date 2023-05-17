let getDate = () => {
    const formatDate = (timestamp) => {
        if (timestamp) {
          const now = new Date();
          const secondsPast = Math.floor((now - timestamp.toDate()) / 1000);
  
          if (secondsPast < 30) {
            return `a few seconds ago`;
          }
  
          if (secondsPast < 60) {
            return `${secondsPast} seconds ago`;
          }
  
          if (secondsPast < 3600) {
            const minutes = Math.floor(secondsPast / 60);
            return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
          }
  
          if (secondsPast <= 86400) {
            const hours = Math.floor(secondsPast / 3600);
            return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
          }
  
          const days = Math.floor(secondsPast / 86400);
          return `${days} ${days === 1 ? "day" : "days"} ago`;
        }
      };

    return { formatDate };
}

export default getDate;