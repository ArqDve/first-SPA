import getData from '../utils/getData'
import getHash from '../utils/getHash'


const Character = async () => {
    const id = getHash()
    const chatacter = await getData(id)
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${chatacter.image}" alt="${chatacter.name}">
                <h2>${chatacter.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: <span>${chatacter.episode.length}</span></h3>
                <h3>Status: <span>${chatacter.status}</span></h3>
                <h3>Species: <span>${chatacter.species}</span></h3>
                <h3>Gender: <span>${chatacter.gender}</span></h3>
                <h3>Origin: <span>${chatacter.origin.name}</span></h3>
                <h3>Last Location: <span>${chatacter.location.name}</span></h3>
            </article>
        </div>
    `
    return view
}

export default Character

