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
    backgroundImage: 'url("https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const backgroundImageStyle4 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen opacity-80" style={backgroundImageStyle1}>
        
        
      </div>

      <div className=' flex flex-row'>
      <div className="bg-cover bg-no-repeat bg-center h-screen w-3/6 mt-4 mr-auto" style={backgroundImageStyle2}>
           
      </div>

      <span className='w-3/6 ml-8 text-black text-5xl dark:text-white pt-56 font-black'>
          Nike Air Force 1 x Carhartt WIP
      </span>

       <div className="mt-auto mb-auto pr-40">
        <button className='bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-4xl'>Shop</button>
       </div>
      </div>

      <div className="bg-cover bg-no-repeat bg-center h-screen w-3/6 mt-4 ml-auto" style={backgroundImageStyle3}>
           
      </div>

      
      <div className="bg-cover bg-no-repeat bg-center h-screen mt-4 mb-10" style={backgroundImageStyle4}>

      </div>
      <div className="text-black text-bold text-7xl dark:text ml-20 mb-10 font black"> We Have Awsome Variety In Reebok Shoes </div>

      



      
      
      

    </>
  );
}

export default Home;