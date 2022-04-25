import randomBoolean from "./randomBoolean"
import randomColor from "./randomColor"
import randomEmoji from "./randomEmoji"
import randomInt from "./randomInt"
import randomString from "./randomString"
import randomAnimal from "./randomAnimal"
import randomCountry from "./randomCountry"

import array from "./array"

export default {
    ...randomEmoji,
    ...randomInt,
    ...randomBoolean,
    ...randomString,
    ...randomColor,
    ...randomAnimal,
    ...randomCountry,
    ...array
}