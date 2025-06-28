import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH INPUT */}
        <div className='flex hidden md:flex items-center rounded-full gap-2 ring-[1.5px] ring-gray-300 px-2'>
            <Image src='/search.png' alt='' width={14} height={14}/>
            <input placeholder='Search...' type='text' className='bg-transparent outline-none w-[200px]'/>
        </div>
        {/* PROFILE AND ICONS */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white rounded-full flex items-center justify-center w-7 h-7 cursor-pointer'>
                <Image src='/message.png' alt='' width={14} height={14}/>
            </div>
            <div className='bg-white rounded-full flex items-center justify-center w-7 h-7 cursor-pointer relative'>
                <Image src='/announcement.png' alt='' width={14} height={14}/>
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-xs text-white rounded-full'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>Aiatulla Turatbaev</span>
                <span className='text-[10px] text-right text-gray-500 '>Student</span>
            </div>
                <Image src='/avatar.png' width={36} height={36} alt='' className='rounded-full'/>
        </div>
    </div>
  )
}

export default NavBar