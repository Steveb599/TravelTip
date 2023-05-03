import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const PET_KEY = 'petDB'

var gFilterBy = { txt: '', minScore : 0 }

_createPets()

export const petService = {
    query,
    get,
    remove,
    save,
    getEmptyPet,
    getFilterBy,
    setFilterBy
}

function query() {
    return storageService.query(PET_KEY)
        .then(pets => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.txt, 'i')
                pets = pets.filter(pet => regex.test(pet.name))
            }
            if (gFilterBy.minScore) {
                pets = pets.filter(pet => pet.score >= gFilterBy.minScore)
            }
            return pets
        })
}

function get(petId) {
    return storageService.get(PET_KEY, petId)
}

function remove(petId) {
    return storageService.remove(PET_KEY, petId)
}

function save(pet) {
    if (pet.id) {
        return storageService.put(PET_KEY, pet)
    } else {
        return storageService.post(PET_KEY, pet)
    }
}

function getEmptyPet(name = '', score = 0) {
    return { id: '', name, score }
}

function getFilterBy() {
    return {...gFilterBy}
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minScore !== undefined) gFilterBy.minScore = filterBy.minScore
    return gFilterBy
}

function _createPets() {
    let pets = utilService.loadFromStorage(PET_KEY)
    if (!pets || !pets.length) {
        _createDemoPets()
    }
}

function _createDemoPets() {
    const petNames = ['Bobi', 'Charli', 'Pinchi']
    const petDescs = ['Bobi is an amazing dog', 'Charli is a curious cat', 'Just one look at Pinchi']

    const pets = petNames.map((petName, i) => {
        const pet = _createPet(petName)
        pet.desc = petDescs[i]
        return pet
    })

    utilService.saveToStorage(PET_KEY, pets)
}

function _createPet(name) {
    const pet = getEmptyPet()
    pet.id = utilService.makeId()
    pet.type = utilService.randomPetType()
    pet.name = name || utilService.randomPetName(pet.type)
    pet.birth = utilService.randomPastTime()
    return pet
}