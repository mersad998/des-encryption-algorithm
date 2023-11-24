export const textToBinary = (text: string): string => {
  let binaryString = '';

  for (let i = 0; i < text.length; i++) {
    // Get ASCII value of each character
    const charCode = text.charCodeAt(i);
    // Convert ASCII value to binary and pad with zeros to ensure it's 8 bits
    const binary = charCode.toString(2).padStart(8, '0');
    // Concatenate the binary representation to the result string
    binaryString += binary;
  }

  return binaryString;
};

export const generateRandomKey = (): string => {
  let key = '';

  // Generate 56 bits for the effective key
  for (let i = 0; i < 7; i++) {
    const randomByte = Math.floor(Math.random() * 256);
    const randomBinary = randomByte.toString(2).padStart(8, '0');
    key += randomBinary;
  }

  // Add 8 bits for parity (ignoring for simplicity, as parity bits are not used in DES)
  return key;
};

export const splitIntoEightCharStrings = (input: string): string[] => {
  const result: string[] = [];

  for (let i = 0; i < input.length; i += 8) {
    const eightChars = input.slice(i, i + 8);
    result.push(eightChars);
  }

  return result;
};
