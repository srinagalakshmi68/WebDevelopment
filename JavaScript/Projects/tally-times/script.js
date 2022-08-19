const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

console.log(timeNodes)

const times = timeNodes.map(node => node.dataset.time)


let totalSeconds = 0;
for (let i = 0; i < times.length; i++) {

    // const hh = times[i].split(':')[0]
    // const min = times[i].split(':')[1]
    const [hh, min] = times[i].split(':')
        // const [arg1,arg2] = [1,2];
    totalSeconds += hh * 60 * 60 + min * 60
}
console.log(totalSeconds)
const finalHours = Math.floor(totalSeconds / 3600)

const hoursLeft = totalSeconds / 3600 - finalHours

const finalMinutes = Math.round(hoursLeft * 60)

document.querySelector(".total").innerHTML = `${finalHours}:${finalMinutes}`