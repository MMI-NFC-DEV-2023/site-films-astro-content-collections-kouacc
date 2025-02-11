const options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formatter = new Intl.DateTimeFormat("fr-FR", options);



export function formatDate(date: Date): string {
  return formatter.format(date);
}
