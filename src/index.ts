import randomBoolean from "./randomBoolean"
// import randomColor from "./randomColor"
import randomEmoji from "./randomEmoji"
import randomInt from "./randomInt"
import randomString from "./randomString"

export default {
    ...randomEmoji,
    ...randomInt,
    ...randomBoolean,
    ...randomString,
    ...randomColor
}