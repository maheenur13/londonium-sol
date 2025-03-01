export const splitStringUsingRegex = (inputStr: string): string[] => {
    const characters: string[] = [];
    const regex = /[\s\S]/g;

    let match;
    while ((match = regex.exec(inputStr)) !== null) {
        characters.push(match[0]);
    }
    return characters;
};
