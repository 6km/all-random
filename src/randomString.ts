export default {
    randomString(length: number, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*-._"): string {
        var result = "";

        for (var c = 0; c < length; c++) {
            var randomCharacterIndex = Math.floor(Math.random() * characters.length)
            var randomCharacter = characters.charAt(randomCharacterIndex)

            result += randomCharacter
        }

        return result
    }
}