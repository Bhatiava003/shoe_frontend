import React from 'react';




function Home() {
  const backgroundImageStyle1 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80z")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  };

  const backgroundImageStyle2 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
  };
  
  const backgroundImageStyle3 = {
    backgroundImage: 'url("https://cdn.sanity.io/images/c1chvb1i/production/53fa76a8d1edbc69650a164e69d265265ce450d8-1100x735.jpg/reebok-classic-leather-2022-1.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen opacity-80" style={backgroundImageStyle1}>
        <div className='text-cyan-600 text-6xl dark:text-white pt-52 '>
            <span className="text-shadow-xl text-shadow-blue-dark">
                Awesome white sneakers 
            </span>
        </div>
        <div>
            <button className='bg-yellow-400 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-4xl'>
                Shop
            </button>
        </div>
      </div>

      <div className=' flex flex-row'>
      <div className="bg-cover bg-no-repeat bg-center h-screen w-3/6 mt-4 " style={backgroundImageStyle2}>
           
      </div>

      <span className='w-3/6 ml-8 text-black text-5xl dark:text-white pt-56 font-black'>
          Nike Air Force 1 x Carhartt WIP
      </span>

       <div className="mt-56">
        <button className='bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-4xl'>Shop</button>
       </div>
      </div>

     
      <div className="bg-cover bg-no-repeat bg-center h-screen mt-4 mb-10" style={backgroundImageStyle3}>

      </div>
      <div className="text-black text-bold text-7xl dark:text ml-20 mb-10 font black"> We Have Awesome Variety In Reebok Shoes </div>

      



      
      
      

    </>
  );
}

export default Home;