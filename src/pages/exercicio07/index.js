import { useState, useRef, useEffect } from 'react';
import '../../App.css';

export default function DownloadSoftware() {
  const softwareObj = {
    nome: 'Audaces 4D',
    downloaded: 0,
    isDownloading: false
  }

  const [software, setSoftware] = useState(softwareObj)

  const intervalId = useRef();

  function iniciarDownload() {
    intervalId.current = setInterval(() => {
      setSoftware(prev => ({
        ...prev,
        isDownloading: true,
        downloaded: prev.downloaded += 1
      }))
    }, 50);
  }

  useEffect(() => {
    if (software.isDownloading && software.downloaded >= 100) {      
      clearInterval(intervalId.current)
      setSoftware(prev => ({
        ...prev,
        downlaoded: 0,
        isDownloading: false
      }))
    }
  }, [software])


  return (
    <div className='sistemas'>
      <div style={{ 'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'margin': '0 auto', 'alignItems': 'center' }}>
        <h4>{software.nome} - {software.isDownloading}</h4>
        <progress value={software.downloaded} min="0" max="100"></progress>
        <button onClick={iniciarDownload}>Download</button>
      </div>
    </div>
  )
}