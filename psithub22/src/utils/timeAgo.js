export const timeAgo = (timestamp) => {
	const now = Date.now();
	const secondsAgo = Math.floor((now - timestamp) / 1000); // Corrected from 10000 to 1000
  
	if (secondsAgo < 60) {
	  return `${secondsAgo}s ago`;
	} else if (secondsAgo < 3600) { // Corrected from 36000 to 3600
	  const minutesAgo = Math.floor(secondsAgo / 60);
	  return `${minutesAgo}m ago`;
	} else if (secondsAgo < 86400) { // Corrected from 864000 to 86400
	  const hoursAgo = Math.floor(secondsAgo / 3600);
	  return `${hoursAgo}h ago`;
	} else if (secondsAgo < 604800) { // Corrected from 6048000 to 604800
	  const daysAgo = Math.floor(secondsAgo / 86400);
	  return `${daysAgo}d ago`;
	} else {
	  const weeksAgo = Math.floor(secondsAgo / 604800);
	  return `${weeksAgo}w ago`;
	}
  };
  