import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const PrivacySettings = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: '#111111', height: '100%'}}>

  <View style = {{flexDirection: 'row'}}>
    <View style = {{backgroundColor: '#00000047', height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), borderRadius: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/9678/9678560.png'}}
        style = {{tintColor: '#FFFFFF', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(4)}}/>
    </View>
    <View style = {{ justifyContent: 'center', marginHorizontal: Utils.ScreenWidth(8)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 18, fontWeight: 600,}}>Privay and Settings</Text>
    </View>
 </View>

    <View style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(1)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 14}}>ACCOUNT</Text>
    </View>

<View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
  
  <TouchableOpacity style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Manage My Account</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(20)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{ flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/3064/3064197.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Privacy and Safety</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(23)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{ flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/1159/1159798.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Content prefences</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(23)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{ flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2527/2527857.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Rewards & Balance</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(21)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{ flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2958/2958783.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Share Profile</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(33)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>
</View>


<View style={{height: 0.5, backgroundColor: '#868686', marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(4)}} />


    <View style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3)}}>
        <Text style = {{color: '#868686', fontSize: 14}}>GENERAL</Text>
    </View>

    <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
  
  <TouchableOpacity style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2529/2529521.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Push notifications</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(22)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{ flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/6133/6133973.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#868686'}}/>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(3), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Language</Text>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center', marginLeft: Utils.ScreenWidth(36)}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(2), width: Utils.ScreenHeight(2), tintColor: '#FFFFFF'}}/>
      </View>
  </TouchableOpacity>
</View>

<View style={{height: 0.5, backgroundColor: '#868686', marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(12)}} />

<View style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3)}}>
        <Text style = {{color: '#868686', fontSize: 14}}>LOGIN</Text>
    </View>

    <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 14}}>Login info</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3)}}>
        <Text style = {{color: '#62b4ff', fontSize: 14}}>Add Account</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3)}}>
        <Text style = {{color: '#c51c1c', fontSize: 14}}>Log out as Alice Berenson</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(7), marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(4)}}>
        <Text style = {{color: '#c51c1c', fontSize: 14}}>Log out as all accounts</Text>
    </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PrivacySettings