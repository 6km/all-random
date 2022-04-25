import chalk from 'chalk'

export default {
    randomString(length: number = 8, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*-._"): string {
        if (!length) console.warn(`${chalk.yellow("»")} randomString() requires the following argument: length (default is 8)`);

        var result = "";

        for (var c = 0; c < length; c++) {
            var randomCharacterIndex = Math.floor(Math.random() * characters.length)
            var randomCharacter = characters.charAt(randomCharacterIndex)

            result += randomCharacter
        }

        return result
    }
}