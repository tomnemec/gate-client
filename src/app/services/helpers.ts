// Helper function to get date string with offset days
export function getDateString(date: Date, offsetDays: number): string {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + offsetDays);
  return newDate.toLocaleDateString();
}
