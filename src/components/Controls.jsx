import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'
import {FaForward} from 'react-icons/fa'
import {FaBackward} from 'react-icons/fa'
import {ImShuffle} from 'react-icons/im'
import {RxLoop} from 'react-icons/rx'

export const Controls = ()=>{
    return(
        <div className=' flex w-[80%] mr-auto ml-auto justify-between items-center'>
            <button>
                <FaBackward className=' text-[#FACD66]'/>
            </button>
            <button>
            <FaPlay className=' text-[#FACD66]' />
            <FaPause  className=' text-[#FACD66]' />
            </button>
            <FaForward className=' text-[#FACD66]'/>
        </div>
    )
}










