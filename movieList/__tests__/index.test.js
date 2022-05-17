// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const { Builder, Capabilities, By } = require(`selenium-webdriver`)

require(`chromedriver`)

const { addMovie, removeMovie, crossMovie, notification } = require('../functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we`re going to navigate to Google.com
beforeAll(async () => {
    await driver.get(`http://127.0.0.1:5500/movieList/index.html`)
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// // This test will require you to change some values in order to get your tests up and running
// // You`ll want to change each of the commented out pieces below
test(`adding movie`, async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

test(`cross off a movie`, async () => {
    await crossOffMovie(driver)

    await driver.sleep(2000)
})

test(`remove a movie`, async () => {
    await removeMovie(driver)

    await driver.sleep(2000)
})

