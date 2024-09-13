import { useState } from 'react';
import Leftelement from '../Element/Leftelement';
import leftarrow from '../../assets/arrow-small-left.png';
import Rightarrow from '../../assets/arrow-small-right.png';
import image1 from '../../assets/Image/219256.jpg';
import image2 from '../../assets/Image/55497.jpg';
import image3 from '../../assets/Image/cpwfgw26cjbd1.jpeg';
import image4 from '../../assets/Image/levi-guzman-wF5z4_JzxaU-unsplash.jpg';
import image5 from '../../assets/Image/pexels-introspectivedsgn-4066147.jpg';
import image6 from '../../assets/Image/pexels-valdemaras-d-784301-1687678.jpg';

export default function Widget2() {
    const images = [image1, image2, image3, image4, image5, image6];
    const [startIndex, setStartIndex] = useState(0);

    const showImages = 3; // Number of images to show at once

    // Function to navigate left
    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    // Function to navigate right
    const handleRightClick = () => {
        if (startIndex < images.length - showImages) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="bg-light-gray flex flex-row  pl-2 py-2  rounded-2xl mb-2 shadow-custom-boxshadow shadow-black">
            <Leftelement />
            <div className='w-full flex flex-col pl-2 text-xl'>
                <div className='flex flex-row justify-between pt-2 pr-16'>
                <button className='px-9 py-3 bg-black hover:bg-zinc-900  rounded-2xl text-xl text-white' >Gallery</button>
                    <div className='flex flex-row gap-10'>
                        <div className="mt-5 ">
                            <label htmlFor="file-upload" className="text-sm font-bold text-white px-4 py-3 bg-zinc-600 shadow-custom-boxshadow shadow-black  cursor-pointer rounded-full hover:bg-cyan-700 ">+ ADD IMAGE</label>
                            <input id="file-upload" type="file" className="hidden" />
                        </div>
                        <div className="flex flex-row gap-4 mt-4">
                            <button onClick={handleLeftClick} disabled={startIndex === 0} className='p-2 bg-zinc-600 rounded-full hover:bg-cyan-700 shadow-custom-boxshadow shadow-black'>
                                <img src={leftarrow} alt="left arrow" className="w-6" />
                            </button>
                            <button onClick={handleRightClick} disabled={startIndex >= images.length - showImages} className='p-2 bg-zinc-600 rounded-full hover:bg-cyan-700 shadow-custom-boxshadow shadow-black'>
                                <img src={Rightarrow} alt="right arrow" className="w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Display three images at a time */}
                <div className='flex flex-row gap-3 mt-12 mb-2'>
                    {images.slice(startIndex, startIndex + showImages).map((image, index) => (
                        <img key={index} src={image} alt={`image${index}`} className='w-52 h-44 my-2 rounded-3xl hover:scale-105 hover:-rotate-2' />
                    ))}
                </div>
            </div>
            
        </div>
    );
}
