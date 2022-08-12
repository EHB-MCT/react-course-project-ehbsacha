class RecipeService {
    // Local place for the Angular url
    angular = 'https://sacha-angular.netlify.app'
    // angular = 'http://localhost:4200'


    // baseUrl = "https://recepten-liese-c.herokuapp.com/"; <- previous api

    // basic required stuff
    baseUrl = `https://api.spoonacular.com/`;
    key = `d2f81e1afe634a088f952a1add69d307`;
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

// 1 - 5
// 9d27c0e3e70247c2a0b1861d56e60375
// a63bbb37b3b84baba1de52681e102f7e
// 720fb95fb7e449d5be4fb2a453ce7db4
// 0d9cf745b2b14fb0b1ec483abf3800cc
// c4f7d95969c34c009df7bfc1b3f31347

// 6 - 10
// fd29be03ea994da0a1d828da3d843a44
// 66cb98c71b8e4c1e8bb94007b62a14c5
// 3cea7defa0894eb69af1b16ead313107
// a5a02c1e5a15414092f974b1aff77a10
// 1e8cf27f56954a8095c6c173cfcc52e6

// 11 - 15
// 98fe6b3b568e43a1abfa764bed5db7f8
// 4ecc407c12194edba39ef3a6d51b5d3f
// 5c61ef46d5c6463386ed9c9bef2c79d2
// d2f81e1afe634a088f952a1add69d307
// 0bbc541a54024b868e3f064835d332f7

export const recipeService = new RecipeService();