import React from 'react'; // Make sure to import React
import aboutImg from "../../assets/Home/ShortAbout/sabg1.png";

function ShortAbout() {
    const sectionStyle = {
        width: '100%',
        height: '50vh',
        backgroundImage: `url(${aboutImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='flex justify-center items-center' style={sectionStyle}>
            <div className="w-9/12 h-72 bg-white flex justify-center items-center">
                <div className='text-center h-36 flex justify-center items-center'>
                    <div className=' '>
                        <h3 className='text-4xl py-4'>KHABAR DABAR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reprehenderit nam non dolore soluta aut voluptatibus! Sed dolores, aut at inventore culpa nulla praesentium veniam quidem repellendus qui, dolore enim.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ShortAbout;

