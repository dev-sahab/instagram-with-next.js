export default function timeAgo(timestamp) {
  const now = new Date();
  const postDate = new Date(timestamp);

  const secondsAgo = Math.floor((now - postDate) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (secondsAgo < 60) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return minutesAgo > 1
      ? `${minutesAgo} minutes ago`
      : `${minutesAgo}  minute ago`;
  } else if (hoursAgo < 24) {
    return hoursAgo > 1 ? `${hoursAgo} hours ago` : `${hoursAgo} hour ago`;
  } else if (daysAgo < 7) {
    return daysAgo > 1 ? `${daysAgo} days ago` : `${daysAgo} day ago`;
  } else {
    const hours = String(postDate.getHours()).padStart(2, "0");
    const minutes = String(postDate.getMinutes()).padStart(2, "0");

    // Check if the calendar year has changed
    const currentYear = now.getFullYear();
    const postYear = postDate.getFullYear();
    if (currentYear !== postYear) {
      return `${postDate.getDate()} ${
        monthNames[postDate.getMonth()]
      } ${postYear} at ${hours}:${minutes}`;
    }

    return `${postDate.getDate()} ${
      monthNames[postDate.getMonth()]
    } at ${hours}:${minutes}`;
  }
}
