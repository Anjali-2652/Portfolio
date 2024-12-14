import React from 'react'

const Card = () => {

  const data = [
    {title:"Foodmandu clone", desc: "This is a replica of the popular food delivery service, Foodmandu, designed to showcase my frontend development skills.", image:"src/assets/food.png", video:"src/Videos/foddmandu.mp4"},

    {title: "Movies website", desc: "This project is a replica of a popular movie streaming service, designed to showcase my frontend development skills.", image: "src/assets/movies.png", video:"src/Videos/moviesvideo.mp4"},

    {title: "Countries reports website", desc: "Welcome to my Countries Details website! This project is designed to provide comprehensive information about countries around the world, showcasing my frontend development skills.", image:"src/assets/country.png", video:"src/Videos/countryvideo.mp4"},
   
  ];

  return (
    <div>
      <div className='pb-10 pl-5 flex gap-x-10'>
        {
          data.map((item, index)=>(

            <div key = {index}
            
            className='h-fit w-[300px] bg-blue-950 hover:scale-110 rounded-xl  p-5  hover:p-8 ' >
            <img className='basis-1/2 rounded-2xl'
             src={item.image} alt="" />
            <div className='mt-2'><div className='font-bold text-2xl text-center'>{item.title}</div>
            <div className='mt-2 mb-4'>
                {item.desc}
                </div>
                <a className='bg-blue-500 flex justify-center px-5 py-2 text-xl rounded-2xl '
                 href={item.video}>Demo</a>
                </div>
        </div>

          ))
        }
    
      </div>
    </div>
  )
}

export default Card
