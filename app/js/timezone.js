const locations = document.querySelectorAll("footer .timezones div")

const updateTimes = function () {
    locations.forEach(location => { ///esta funcion es la que trae la hora actual del luxon
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")

        const now = luxon.DateTime.now().setZone(timezone)

        output.innerHTML = now.toFormat("t")
    })
}
updateTimes()
setInterval(function () {
    updateTimes()
}, 1000)