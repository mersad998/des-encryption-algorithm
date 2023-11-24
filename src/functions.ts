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
