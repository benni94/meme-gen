import React, { useEffect, useState } from 'react';
import './../../Styles/globstyle.css';
import domtoimage from 'dom-to-image';
import { Loading } from '../../components/Loading/Loading';
import logo from './../../assets/images/rand.jpeg';
import { Searchbar } from '../../components/SearchBar/Searchbar';
import { Button } from '@mui/material';
import { TextMove } from '../../components/TextMove/TextMove';
import { DragUpDown } from '../../components/DragUpDown/DragUpDown';
import { ArrowsUpDown } from '../../components/DragUpDown/ArrowsUpDown';
import { DragDropImg } from '../../components/DragDropImg/DragDropImg';
import { SelectorWrapper } from '../../components/Selector/SelectorWrapper';
import { ColorPalette } from '../../components/ColorPalette/ColorPalette';

export type IMemeGeneratorProps = {

}


const MemeGenerator: React.FC<IMemeGeneratorProps> = () => {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImage, setRandomImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [allMemeImgs, setAllMemeImgs] = useState([]);
    const [parentX, setparentX] = useState(0);
    const [parentY, setparentY] = useState(0);
    const [blackSize, setBlackSize] = useState(0);
    const [fontSize, setFontSize] = useState("1");
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        setLoading(true);
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                let memes = [];
                memes = response.data.memes.map((data: any) => {
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

    useEffect(() => {
        return () => clearInterval();
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        domtoimage.toJpeg(document.getElementById('memeForm') as HTMLElement, { quality: 1 })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'beniMeme.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    function getSearch(event) {
        setRandomImage(event.url)
    }

    function arrowMoved(e: number) {
        setBlackSize(e);
    }

    function checkParentSize(el) {
        if (!el) return;
        setInterval(() => {
            setparentX(el.getBoundingClientRect().width);
            setparentY(el.getBoundingClientRect().height - 50);
        }, 400);
    }

    function handleInputImg(getImg: string) {
        setRandomImage(getImg);
    }

    function setSize(e: any) {
        setFontSize(e.target.value.toString());
    }

    function changeColor(e: string) {
        setColor(e);
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
                <Button variant="contained" type="submit">Download</Button>
            </form>

            <br />

            <SelectorWrapper setSelect={(e) => setSize(e)} />

            <br />
            <br />

            <ColorPalette changeColorHex={changeColor} />

            <div
                ref={el => { checkParentSize(el) }}
                className="meme" id="memeForm" >

                <TextMove getFontSize={fontSize} inputText={topText} startPosition={{ x: parentX, y: 0 }} />
                <TextMove getFontSize={fontSize} inputText={bottomText} startPosition={{ x: parentX, y: parentY }} />

                <DragUpDown getX={Number(parentX)} getY={0} offsetY={Number(blackSize)} getColor={color} />

                <img style={{ display: 'block' }} src={randomImage === "" ? logo : randomImage} alt="Meme" />
                <DragUpDown getX={Number(parentX)} getY={0} offsetY={Number(blackSize)} getColor={color.toString()} />

            </div>

            <ArrowsUpDown arrowDrive={arrowMoved} />
            <br />
            <br />
            <DragDropImg loadImg={handleInputImg} />
            <Loading isLoading={loading} />


        </div>
    );
}

export { MemeGenerator };