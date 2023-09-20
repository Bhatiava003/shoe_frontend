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
    backgroundImage: 'url("https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen opacity-80" style={backgroundImageStyle1}>
        
        
      </div>

      <div className=' flex flex-row'>
      <div className="bg-cover bg-no-repeat bg-center h-screen w-3/6 mt-4" style={backgroundImageStyle2}>
           
      </div>

      <span className='w-3/6 ml-5 text-red-800 text-6xl dark:text-white pt-56 font-black'>
          Nike Air Force 1 x Carhartt WIP
      </span>
      </div>

      <div className="bg-cover bg-no-repeat bg-center h-screen mt-4" style={backgroundImageStyle3}>

      </div>

      



      
      
      

    </>
  );
}

export default Home;