import { useEffect, useState, useRef } from 'react';
import '../../App.css';
// import './style.css';

export default function DownloadSoftware() {
  const softwareObj = {
    nome: 'Audaces 4D',
    downloaded: 0,
    isDownloading: false
  }

  const [software, setSoftware]= useState(softwareObj)
  // const intervalId = useRef()

  function iniciarDownload() {
    setInterval(() => {
      setSoftware(prev => ({
        ...prev, 
        downloaded: prev.downloaded += 1
      }))
    }, 1000);
  }


  return (
    <div className='sistemas'>
        {/* {softwares.map(software => { */}
            {/* return ( */}
                <div>
                    <h4>{software.nome}</h4>
                    <progress value={software.downloaded} min="0" max="100">{software.downloaded}</progress>
                    <button onClick={iniciarDownload}>Download</button>
                </div>
            {/* ) */}
        {/* })} */}
    </div>
  )
}