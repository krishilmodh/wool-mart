import React from 'react'

import styles from './screenheader.style'
import { TouchableOpacity ,Image } from 'react-native'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style= {styles.btnContainer} onpress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      >
      </Image>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn