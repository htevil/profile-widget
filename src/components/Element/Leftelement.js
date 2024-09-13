import interrogation from '../../assets/interrogation.svg';

export default function Leftelement() {
    return (
        <div className='flex flex-col gap-28 px-1 py-2 ' >
            <img src={interrogation} alt='no_img' className='w-6' />
            <div class="w-4 grid grid-cols-2 grid-rows-3 gap-x-0.5 gap-y-px">
                <div className="bg-slate-600 w-2 h-2"></div>
                <div className="bg-slate-600 w-2 h-2"></div>
                <div className="bg-slate-600 w-2 h-2"></div>
                <div className="bg-slate-600 w-2 h-2"></div>
                <div className="bg-slate-600 w-2 h-2"></div>
                <div className="bg-slate-600 w-2 h-2"></div>
            </div>
        </div>

    );
};