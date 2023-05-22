import { useState } from "react"


const GifsExpo = ({categories}) =>{
    const [gifsList, setGifsList] = useState([])


    const getGifsList = async () => {
        let gifArray = []
      categories.forEach(async (category) => {
        const query = encodeURIComponent(category)
        const apikey = "9KpoSOUed1zG2A3ouUhyn7bAgQLFp58s"
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q${query}limit=10`)
        const gifsList = await response.json()


        const urlGifsList = gifsList.data.map((gif) =>{
          return gif.images.fixed_width.url
          
      })
      gifArray = [...gifArray, ...urlGifsList]

    })

      setGifList(...gifArray)
    } 

    getGifsList()
   
  return (
    <h4>GifsExpo</h4>
  )
}

export default GifsExpo