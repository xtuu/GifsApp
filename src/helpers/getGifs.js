export const getGifs = async (categorias) => {
    const token = import.meta.env.VITE_SOME_KEY
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${encodeURI(token)}&q=${encodeURI(categorias)}&limit=20`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        source: img.images.downsized_medium.url
    }))
    return gifs;
}
