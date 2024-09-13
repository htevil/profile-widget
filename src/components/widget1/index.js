import Leftelement from '../Element/Leftelement';
import Vline from '../../assets/tally.svg';
import { useState } from 'react';

export default function Widget1() {
    const [set1, selectSet1] = useState(true);
    const [set2, selectSet2] = useState(false);
    const [set3, selectSet3] = useState(false);

    const ontoggleButton = (id) =>{
        if (id === "button1") {
            selectSet1(true);
            selectSet2(false);
            selectSet3(false);
        } else if (id === "button2") {
            selectSet1(false);
            selectSet2(true);
            selectSet3(false);
        } else if (id === "button3") {
            selectSet1(false);
            selectSet2(false);
            selectSet3(true);
        }
    }

    return (
        <div className="bg-light-gray flex flex-row justify-between p-2 rounded-2xl mb-2 shadow-custom-boxshadow shadow-black">
            <Leftelement />
            <div className='flex flex-col justify-center items-center p-2 w-11/12'>
                <div className='flex flex-row gap-8 bg-black p-2 rounded-xl opacity-85'>
                    <button 
                        className={`px-9 py-3 bg-black hover:bg-zinc-900  rounded-2xl text-xl text-white transition duration-300 ease-in-out ${set1 ? 'shadow-button-shadow bg-zinc-900' : ''}`} 
                        onClick={() => ontoggleButton("button1")} 
                    >About Me</button>
                    <button 
                        className={`px-9 py-3 bg-black hover:bg-zinc-900  rounded-2xl text-xl text-white transition duration-300 ease-in-out ${set2 ? 'shadow-button-shadow bg-zinc-900' : ''}`} 
                        onClick={() => ontoggleButton("button2")} 
                    >Experiences</button>
                    <button 
                        className={`px-9 py-3 bg-black hover:bg-zinc-900  rounded-2xl text-xl text-white transition duration-50 ease-in-out ${set3 ? 'shadow-button-shadow bg-zinc-900 '   : ''}`} 
                        onClick={() => ontoggleButton("button3")} 
                    >Recommended</button>
                </div>
                <div className='text-xl text-zinc-400 font-normal tracking-tight leading-normal pt-8 pl-2 xl:text-lg'>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</div>
                <div className='text-xl font-normal text-zinc-400  tracking-tight leading-normal mt-3 mb-1 pl-2 xl:text-lg'>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.</div>

                
            </div>
            <div className='flex flex-row items-center p-1 w-8'>
                <img src={Vline} alt='novline'/>
            </div>
        </div>
    );
}