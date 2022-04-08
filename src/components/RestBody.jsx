import React, {useState} from "react";
import memesData from "../memesData.js"

export default function RestBody(){

    // btn animation
    const [btnDown, setBtnDown] = useState(false);
    
    function memeBtnDown(){
        setBtnDown(true)
    }

    function btnUp(){
        setBtnDown(false);
    }

    // meme text 
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: ""
    });

    function handleChange(event){
        
        const {name, value} = event.target;

        setMemeText((prevText) => {
            return({
                ...prevText,
                [name]: value
            })
        });

    }

    // random img generator
    const [imgURl, setImgURL] = useState();

    function getMemeImg(){
        const memeArr = memesData.data.memes;
        const rNum = Math.floor(Math.random() * memeArr.length);
        const url = memeArr[rNum].url;
        console.log(url);
        setImgURL(url);
    }

    return(
        <div className="rest-style"> <br />
            <div className="meme-input-style">
                <div className="input-style">
                    <input type="text" placeholder=" Top Text" 
                        name="topText" value={memeText.topText} onChange={handleChange}
                    />
                    <input type="text" placeholder=" Bottom Text" 
                        name="bottomText" value={memeText.bottomText} onChange={handleChange}
                    />
                </div>
                <div className="btn-style">
                    <button
                        onKeyDown={memeBtnDown}
                        onMouseDown={memeBtnDown}
                        onKeyUp={btnUp}
                        onMouseUp={btnUp}
                        style={{backgroundColor: btnDown ? "#da7f9083" : "#DA7F8F"}}
                        onClick={getMemeImg}
                    > ฅ^•ﻌ•^ฅ <strong> Get a new meme image </strong> ฅ^•ﻌ•^ฅ </button>
                </div>
            </div>
            <br /> <br />
            <div className="meme-generator-body">
                <p className="top-text"> {memeText.topText} </p>
                <div className="meme-body">
                    <img src={imgURl} />
                </div>
                <p className="bottom-text"> {memeText.bottomText} </p>
            </div>
        </div>
    );

}
