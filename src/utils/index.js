export  // Format Date and time
const formatDate = (timeISO) => {
  const date = timeISO.split("T")[0];
  const timeSplit = timeISO.split("."[0]);
  const time = timeSplit[0].split("T")[1];
  // return `${timeISO.split("T")[0]} ${timeISO.split(".")[0]}` 
  return date + " " + time;
}