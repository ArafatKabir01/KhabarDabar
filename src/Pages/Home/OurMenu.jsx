import SectionTitle from "../../components/SectionTitle/SectionTitle"

import ourMenuIcon from "../../assets/Home/OurMenu/ourmenuIcon.png"
const OurMenu = () => {
    return (
        <section>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className="flex text-gray-400">
                <div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                    <div className="flex items-center my-5">
                        <div><img src={ourMenuIcon} alt="" className="w-24 mx-8" /></div>
                        <div className="w-[400px]">
                            <h2 className="font-bold">ROAST DUCK BREAST ------------------</h2>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div className="text-amber-600">$14.5</div>
                    </div>
                </div>
            </div>
            <div className="text-center my-10 font-bold border-b-4 border-black rounded-lg w-56 mx-auto"><h2>VIEW FULL MENU</h2></div>
        </section>
    )
}

export default OurMenu