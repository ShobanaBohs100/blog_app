export function formatAMPM(date: Date): string {
  let dateObj = new Date(date);
  var hours = dateObj.getHours();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = hours + " " + ampm;

  return strTime;
}

export function getDateTime(date: Date): string {
  let dateformat = new Date(date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return `${formatAMPM(date)} ${dateformat}`;
}
