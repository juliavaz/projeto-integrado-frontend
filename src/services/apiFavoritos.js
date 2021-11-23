class apiFavoritos {
    getAll(){
        const favoritos = localStorage.getItem('favoritos')
        return favoritos ? JSON.parse(favoritos) : []
    }

    get(id) {
        const favoritos = this.getAll()
        return favoritos[id]
    }

    create(dados){
        const favoritos = this.getAll()
        favoritos.push(dados)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }

    update(dados, id){
        const favoritos = this.getAll()
        favoritos.splice(id, 1, dados)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }

    delete(id){
        const favoritos = this.getAll()
        favoritos.splice(id, 1)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }
}

export default new apiFavoritos()