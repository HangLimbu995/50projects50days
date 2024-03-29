
const joke = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    console.log('joke data', data)
    joke.innerHTML = data.joke
}