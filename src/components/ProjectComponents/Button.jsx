import {useStore} from '@nanostores/react'
import {modalClicked} from './modalStore'

export default function Button(props){

    const $modalClicked = useStore(modalClicked)//Traemos el valor actual del estado
    

   return <div className='w-[100%] sm:w-[80%] lg:w-[66.6%] 2xl:w-6/12 mb-16'><div onClick={()=>{
    const id =props.id
    modalClicked.set(id)}} 
    className={`w-full h-full p-4 rounded-3xl bg-slate-500/30 cursor-pointer group ${modalClicked.value==''?'hover:scale-110 hover:bg-slate-500/0 transition':''} `}>{props.children}</div>


    <div className={`${modalClicked.value==props.id?'scale-100':'scale-0'} flex z-30 fixed inset-0  justify-center items-center text-black transition`}>
        <div className='w-full h-full flex z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-full scale-150 2xl:scale-125 transition' onClick={()=>{modalClicked.set('')}}></div>
        <div className="flex flex-col-reverse gap-y-10 sm:gap-y-0 overflow-y-auto items-center lg:items-stretch  lg:flex-row w-[80%] h-[90%] lg:w-[73%] lg:h-[60%] lg:overflow-hidden p-4 bg-indigo-50  rounded-lg z-50  ">
            <div className="w-[85%] lg:w-[65%] flex justify-center items-center p-3 lg:border-r-2 border-slate-300 2xl:p-0">
                <img src={props.image2} alt={props.title} className="rounded-lg"/>
            </div>
            <div className="relative lg:w-[50%] h-full p-1 sm:p-5 sm:px-0 2xl:px-5 flex flex-col">
                <button className='sticky top-1 sm:absolute sm:top-0 sm:right-0' onClick={()=>{$modalClicked.set('')}}><svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 rounded-full hover:text-indigo-100 hover:bg-indigo-300 transition icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
                <h1 className="text-2xl sm:text-3xl text-center lg:text-start mb-2 lg:mb-4 sm:ml-6 font-bold">{props.title}</h1>
               
                <div className="cardScroll h-full flex flex-col justify-between  text-sm sm:text-base sm:px-4 lg:px-auto  sm:overflow-y-auto ">
                    <div className="mt-4" >
                        <p className="mb-2">{props.texto}</p>
                        <p className="mb-2">{props.texto2}</p>
                        <p className="mb-2">{props.texto3}</p>
                    </div>
                    
                    

                    <div className="flex flex-col w-full self-end">
                    <p className="mb-5">Tecnologías:{props.technologies.map((tech)=> ` ${tech}`)}.</p>
                        <div className="flex justify-around">
                            <a href={props.github} target='_blank' className={`${props.github==''||props.github==undefined ?'hidden':'flex'} items-center font-bold`}>Código</a>

                            <a href={props.link} target='_blank' className="flex items-center font-bold">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="mr-2 size-8 icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                Visitar</a>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>

</div>
}