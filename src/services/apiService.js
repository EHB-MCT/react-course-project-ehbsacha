class RecipeService {
    // baseUrl = "https://recepten-liese-c.herokuapp.com/"; <- previous api

    // basic required stuff
    baseUrl = `https://api.spoonacular.com/`;
    key = `4ecc407c12194edba39ef3a6d51b5d3f`;
    apiKey = `&apiKey=${this.key}`;

    // type of search
    complexSearch = 'recipes/complexSearch?';

    // Extra request items
    returnAllRecipeInformation = true;
    limit = 15;

    // Somewhat reusable url end string
    endUrl = `&number=${this.limit}&addRecipeInformation=${this.returnAllRecipeInformation}${this.apiKey}`

    /*
    // Fetch functions
    */
    async complexSearchFetch(query) {
        const response = await fetch(`${this.baseUrl}/${this.complexSearch}${query}${this.endUrl}`);
        return response.json();
    }

}

// ApiKeys, each of them can do a certain amount of fetchcalls per day.
// 150 points per key but it is a bit less than that in calls
// 9d27c0e3e70247c2a0b1861d56e60375
// a63bbb37b3b84baba1de52681e102f7e
// 720fb95fb7e449d5be4fb2a453ce7db4
// 0d9cf745b2b14fb0b1ec483abf3800cc
// c4f7d95969c34c009df7bfc1b3f31347
// fd29be03ea994da0a1d828da3d843a44
// 66cb98c71b8e4c1e8bb94007b62a14c5
// 3cea7defa0894eb69af1b16ead313107
// a5a02c1e5a15414092f974b1aff77a10
// 1e8cf27f56954a8095c6c173cfcc52e6
// 98fe6b3b568e43a1abfa764bed5db7f8
// 4ecc407c12194edba39ef3a6d51b5d3f

export const recipeService = new RecipeService();