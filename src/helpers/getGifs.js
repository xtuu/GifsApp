export const getGifs = async (categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fkFWUtxCqThQ8Gw5F9NLhkiaKXgW1F09&q=${encodeURI(categorias)}&limit=20`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        source: img.images.downsized_medium.url
    }))
    return gifs;
}
