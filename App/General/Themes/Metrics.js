import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  marginHorizontal: 10,
  marginVertical: 10,
  largeMargin: 30,
  headerHeight: 52,
  baseBorderWidth: 1,
  doubleBaseMargin: 20,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  images: {
    small: 20
  }
}

export default metrics