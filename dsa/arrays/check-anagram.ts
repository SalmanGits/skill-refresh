const checkAnagram = (str1: string, str2: string): Boolean => {
    if (str1.length !== str2.length) return false
    const freqStr1: { [key: string]: number } = {}
    const freqstr2: { [key: string]: number } = {}

    for (let i = 0; i < str1.length; i++) {
        freqStr1[str1[i]] = (freqStr1[str1[i]] || 0) + 1
        freqstr2[str2[i]] = (freqstr2[str2[i]] || 0) + 1
    }
    for (let key in freqStr1) {
        if (freqstr2[key] === undefined) {
            return false
        }
        freqstr2[key]--

    }
    return true



}

console.log(checkAnagram("word", "rowo"))