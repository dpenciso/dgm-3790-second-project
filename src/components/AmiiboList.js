import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AmiiboList = () => {

    const [amiiboNameList, setAmiiboNameList] = useState('')

    const fetchAmiiboList = async () => {

        

        try {
            const response = await axios.get('https://www.amiiboapi.com/api/amiibo')
            const amibList = response.data.amiibo
            const amibName = amibList.map((name => name.name))
            console.log(amibName)
            setAmiiboNameList(amibName.join('\n'))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAmiiboList()
    }, [])
    

  return (
    <div >
      {amiiboNameList}
    </div>
  );
}

export default AmiiboList;
