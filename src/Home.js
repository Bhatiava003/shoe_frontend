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
    backgroundImage: 'url("https://images.unsplash.com/photo-1620001151082-88078e619216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxQSVpaQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen opacity-80" style={backgroundImageStyle1}>
        
        
      </div>

      <div className="btn" style={backgroundImageStyle2}>
        
        
      </div>



      
      
      

    </>
  );
}

export default Home;