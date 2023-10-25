import SectionTitle from "../../components/SectionTitle/SectionTitle"

import ourMenuIcon from "../../assets/Home/OurMenu/ourmenuIcon.png"
import { useState } from "react"
import { useEffect } from "react"
const OurMenu = () => {
    const [popularMenu, setPopularMenu] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                let popularMenu = data.filter(items => items.category === "popular")
                setPopularMenu(popularMenu)
            }

            )
    }, []);

    return (
        <section>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className="grid grid-cols-2 gap-4 justify-items-center text-gray-400">
                {
                    popularMenu.map(item => <div key={item._id}>
                        <div className="flex items-center my-5">
                            <div><img style={{borderRadius:"0 200px 200px 200px"}} src={item.image} alt="" className="w-20 h-20 me-4" /></div>
                            <div className="w-[400px]">
                                <h2 className="font-bold">{item.name}------------------</h2>
                                <p>{item.recipe}</p>
                            </div>
                            <div className="text-amber-600">${item.price}</div>
                        </div>
                    </div>)
                }
                
            </div>
            <div className="text-center my-10 font-bold border-b-4 border-black rounded-lg w-56 mx-auto"><h2>VIEW FULL MENU</h2></div>
        </section>
    )
}

export default OurMenu