import React, { useState, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import WebView from 'react-native-webview'

const NewsScreen = ({navigation}) => {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  const webviewRef = useRef(null)

  backButtonHandler = () => {
    if (webviewRef.current){
     webviewRef.current.goBack()
    } 

    console.log("xxx", canGoBack)
    if(!canGoBack) {
     navigation.popToTop()
    }
  }

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: 'https://www.nabtrade.com.au/investor/support/demo-library' }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack)
            setCanGoForward(navState.canGoForward)
            setCurrentUrl(navState.url)
          }}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={frontButtonHandler}>
            <Text style={styles.button}>Forward</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b43757'
  },
  button: {
    color: 'white',
    fontSize: 24
  }
})

export default NewsScreen