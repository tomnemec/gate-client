export function getText(text: string): string {
  if (text === 'keyScan-eng') {
    return 'To proceed please scan key code and follow instruction. If code you dont have code or it is not working proceed with Manual Scaning';
  }
  if (text === 'rfidScan-eng') {
    return 'To proceed please scan your RFID chip. If code you dont have code or it is not working proceed with Manual Scaning';
  }
  return 'not found';
}
