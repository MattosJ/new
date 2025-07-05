import { useEffect,useState } from 'react'
import "../components/styles/topHeader.css"
const TopHeader = () => {
    const text = 'A criatividade Transforma!';
    const [displayText,setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    useEffect(() =>{
        if(index < text.length){
        const timeOut = setTimeout(() =>{
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1);
      },40)
      return () => clearTimeout(timeOut)
    }
  },[index])
    return(
        <div className="Top-Header">
            <h1 className="Slogan">{displayText}</h1>
        </div>
    )
}

export default TopHeader;