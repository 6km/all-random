export default {
    randomBoolean(): boolean {
        var percentage = Math.floor(Math.random() * 100)

        return percentage >= 50
    }
}