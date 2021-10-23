import React, { useEffect, useState } from 'react';
import './../../Styles/globstyle.css';
import domtoimage from 'dom-to-image';
import { Loading } from '../../components/Loading/Loading';
import logo from './../../assets/images/rand.jpeg';
import { Searchbar } from '../../components/SearchBar/Searchbar';
import { Button } from '@mui/material';

export type IMemeGeneratorProps = {

}


const MemeGenerator: React.FC<IMemeGeneratorProps> = () => {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImage, setRandomImage] = useState("");
    const [loading, setLoading] = useState(false);

    const [allMemeImgs, setAllMemeImgs] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                let memes = response.data.memes.map((data: any) => {
                    return {
                        box_count: data.box_count,
                        height: data.height,
                        id: Number(data.id),
                        name: data.name,
                        url: data.url,
                        width: data.width
                    }
                })
                setAllMemeImgs(memes);
                setTimeout(() => {
                    setLoading(false);

                }, 1000);
            })
    }, []);


    const handleSubmit = (e: any) => {
        e.preventDefault();    
        domtoimage.toJpeg(document.getElementById('memeForm') as HTMLElement, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'beniMeme.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    function getSearch(event) {
        setRandomImage(event.url)
    }

    return (

        <div style={{ marginLeft: "10px", marginRight: "10px" }}>

            <br />
            <br />
            <Searchbar getData={allMemeImgs} setData={getSearch} />
        <br />
            <form className="meme-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Top" value={topText} onChange={e => setTopText(e.target.value)} />
                <input type="text" placeholder="Bottom" value={bottomText} onChange={e => setBottomText(e.target.value)} />
                <Button variant="contained">Download</Button>
            </form>

            <div className="meme" id="memeForm">
                <img src={randomImage === "" ? logo : randomImage} alt="" /> {/* {randomImage} */}
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
            <br />
            <Loading isLoading={loading} />
        </div>
    );
}

export { MemeGenerator };