const { By } = require(`selenium-webdriver`)

const addMovie = async (driver) => {

    await driver.findElement(By.xpath(`//input`)).sendKeys('captain america')

    await driver.findElement(By.xpath(`//button[text()='Add']`)).click()

    const movie = await driver.findElement(By.xpath(`//li/span[text()='captain america']`))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy();

}

const removeMovie = async (driver) => {
    await driver.findElement(By.xpath(`//button[text()='x']`)).click()    
}

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath(`//li/span[text()='captain america']`))
}

const notification = async (driver) => {

}

module.exports = {
    addMovie,
    removeMovie,
    crossMovie,
    notification
}