class fetch {

    baseUrl = "https://recepten-liese-c.herokuapp.com/";

    async getAll() {
        return (await fetch(this.baseUrl + "recipes")).json();
    }

    // async getId(id) {
    //     return (await fetch(this.baseUrl + `recipes/${id}`)).json();
    // }

}

export const fetchRecipes = new fetch();