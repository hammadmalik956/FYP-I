

  const formatTime = (dateWithTime) => {
    const date = new Date(dateWithTime);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }
  
  
  const formatDate = (dateWithTime) => {
    const date = new Date(dateWithTime);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate.replace(/(\d+)(th|nd|rd)/, '$1');
  }

  export  {formatTime, formatDate};