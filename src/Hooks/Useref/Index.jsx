import React, { useRef, useState } from 'react'

const Index = () => {

    const imageRef = useRef(null);
    const [isFirstImage, setIsFirstImage] = useState(true);

    const handleImageChange = ()=>{
        imageRef.current.src = isFirstImage? "https://cdn.pixabay.com/photo/2023/12/26/16/00/glasses-8470536_1280.jpg": "https://media.istockphoto.com/id/516001162/photo/rishikesh-in-india.jpg?s=1024x1024&w=is&k=20&c=UIrRQasXO-QWwktdkRhYWQbPRb4z_Y6QXFvWo_I7sLg=" ;
        setIsFirstImage(!isFirstImage) 
    }

  return (
    <div>
        <h1>Change image using useref</h1>

        <img ref={imageRef} src="https://cdn.pixabay.com/photo/2024/11/22/13/43/autumn-9216501_1280.jpg" alt="" />
        <button onClick={handleImageChange}>Change Image</button>
    </div>
  )
}

export default Index