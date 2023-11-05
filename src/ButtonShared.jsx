import { TelegramIcon , VkIcon , CopyIcon } from './assets/icons'
import './index.css'

function ButtonShared() {
  const _link = 'http://localhost:5173/';
  const _textTelegram = 'любой%20текст%20прям'
  return (
    <div className='w-32 h-18 border-blue-800 border-2 rounded-lg md:w-40 xl:w-52 duration-300'>
      <h1 className='h-12 flex pl-3 items-center md:w-12'>Поделиться:</h1>
      <div className=' flex flex-wrap w-full flex-1 justify-start'>
      <a target='_blank' href={`https://t.me/share/url?url=${_link}&text=${_textTelegram}`}>
      <TelegramIcon  className={'flex-1 border-3 m-2 hover:fill-telega duration-300 cursor-pointer'}/>
      </a>
      <a href={`https://vk.com/share.php?url=${_link}`} target="_blank">
        <VkIcon className={'flex-1 border-3 m-2 hover:fill-vk duration-300 cursor-pointer'}/>
      </a>
      <button onClick={()=>{
        if (navigator.clipboard) {
          navigator.clipboard.writeText('Текст для копирования')
        } 
      }}>
      <CopyIcon className={'flex-1 border-3 m-2 scale-75 cursor-pointer'}/>
      </button>        
      </div>
    </div>
  )
}

export default ButtonShared
