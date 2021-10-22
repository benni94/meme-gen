import React, {  useState } from 'react';
import './../../Styles/globstyle.css';
import domtoimage from 'dom-to-image';
import { Loading } from '../../components/Loading/Loading';
import logo from './../../assets/images/rand.jpeg';

export type IMemeGeneratorProps = {

}

const MemeGenerator: React.FC<IMemeGeneratorProps> = () => {
    const [search, setSearch] = useState("");
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImage, setRandomImage] = useState(""); //http://urlme.me/rand
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e: any) => {
        e.preventDefault();     // don't refresh the page 
        domtoimage.toJpeg(document.getElementById('memeForm') as HTMLElement, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'beniMeme.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        setLoading(true);
        generateImage();
    }

    function generateImage() {
        fetch(`https://cors-proxy404.herokuapp.com/https://urlme.me/${search}/`)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                setRandomImage(objectURL)
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
    }

    return (
        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <form className="meme-form" style={{ justifyContent: "normal" }} onSubmit={handleSearch}>
                <input type="text" placeholder="Search" value={search} onChange={e => { setSearch(e.target.value) }} />
                <button >Search</button>
            </form>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Top" value={topText} onChange={e => setTopText(e.target.value)} />
                <input type="text" placeholder="Bottom" value={bottomText} onChange={e => setBottomText(e.target.value)} />
                <button>Download</button>
            </form>
            <div className="meme" id="memeForm">
                <img src={randomImage===""? logo:randomImage} alt="" /> {/* {randomImage} */}
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>

            <Loading isLoading={loading} />
        </div>
    );
}

export { MemeGenerator };