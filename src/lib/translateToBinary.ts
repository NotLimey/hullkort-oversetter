export const toBinary = (text: string) => {
    // convert text to binary
    // e.g. "Hello World" => "0100100001100101011011000110110001101111"
    return text.split('').map((char) => char.charCodeAt(0).toString(2)).join('');
}

export const binaryToBinaryArray = (binary: string) => {
    // convert binary string to binary array
    // e.g. "0110100001100101011011000110110001101111" => [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return binary.split('').map((char) => parseInt(char, 10)) as (0 | 1)[];
}