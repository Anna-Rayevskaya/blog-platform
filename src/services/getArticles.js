export default class GetArticles {
    async getAllArticles () {
        const url =  'https://blog.kata.academy/api/articles'
        const res = await fetch(url)

        if(!res.ok){
            throw  new Error(`failed to get list of articles ${res.status}`)
        }

        const result = await res.json()
        return result
    }
}