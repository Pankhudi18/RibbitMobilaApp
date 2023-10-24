import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const EditProfile = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: '#111111', height: '100%'}}>

  <View style = {{flexDirection: 'row'}}>
    <View style = {{backgroundColor: '#00000047', height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), borderRadius: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/9678/9678560.png'}}
        style = {{tintColor: '#FFFFFF', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(4)}}/>
    </View>
    <View style = {{ marginTop: Utils.ScreenHeight(2), justifyContent: 'center', marginHorizontal: Utils.ScreenWidth(18)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 18, fontWeight: 600,}}>Edit Profile</Text>
    </View>
 </View>

    <View style={{height: 0.5, backgroundColor: '#868686', marginTop: Utils.ScreenHeight(2)}} />

<View style = {{marginHorizontal: Utils.ScreenWidth(4), }}>
  
<View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <View style = {{marginTop: Utils.ScreenHeight(4)}}>
    <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1699228800&Signature=pG9GQtj3aobBaq0zTT~P51ZkgrGkcnrb4iYEQxX1MOtWYhZYzZQE-O5LyrlZwTKCbwt2GOg3bYSYpJe0AcLVUogMcxLjrRAEW97gokfDjvfWe9w4fiwI-bPMScnTKP85GzvFAn2l4NTdgbqh7c~FHwbxJZPENebMIkAnr8fyaUJG1KRnsrUC09ztf52HbUtIDLlLvLUdPV5GzZHQxN48OLW88hPWwCd21SwFLLs50NsSiWqu~mzrAPsJkxiLw8ekO3tfqwL5igmbfpIbGq7oGmwE1ndBZE1WEdyksYwLywChYQRt~qR9DceB15OqiEaErjLCIXmyo2-uUTgQLNahjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
    style = {{height: Utils.ScreenHeight(14), width: Utils.ScreenHeight(14), borderRadius: Utils.ScreenWidth(20)}}/>
    <Text style  = {{color: '#FFFFFF', marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(2)}}>Change Photo</Text>
  </View>

  <View style = {{marginTop: Utils.ScreenHeight(4)}}>
    <View style = {{height: Utils.ScreenHeight(14), width: Utils.ScreenHeight(14), borderRadius: Utils.ScreenWidth(18), borderWidth: 1, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099110.png'}}
        style = {{height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), tintColor: '#FFFFFF'}}/>
    </View>
    <Text style  = {{color: '#FFFFFF', marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(2)}}>Change Video</Text>
  </View>
</View>

  <View style = {{marginTop: Utils.ScreenHeight(10), flexDirection: 'row',  justifyContent: 'space-between'}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30)}}>
        <Text style = {{color: '#FFFFFF'}}>Name</Text>
      </View>
      <TouchableOpacity style = {{ backgroundColor: "#111111", borderRadius: Utils.ScreenWidth(30), flexDirection: 'row'}}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(2)}}>Jacob West</Text>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(1), width: Utils.ScreenHeight(1), tintColor: '#868686', marginHorizontal: Utils.ScreenWidth(1), marginTop: Utils.ScreenHeight(1)}}/>
      </TouchableOpacity>
  </View>

  <View style = {{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(10), borderRadius: Utils.ScreenWidth(30)}}>
        <Text style = {{color: '#FFFFFF'}}>Username</Text>
      </View>
      <TouchableOpacity style = {{ backgroundColor: "#111111", borderRadius: Utils.ScreenWidth(30), flexDirection: 'row'}}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(2)}}>jacob_w</Text>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(1), width: Utils.ScreenHeight(1), tintColor: '#868686', marginHorizontal: Utils.ScreenWidth(1), marginTop: Utils.ScreenHeight(1)}}/>
      </TouchableOpacity>
  </View>

  <View style = {{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30)}}>
        <Text style = {{color: '#FFFFFF'}}>Bio</Text>
      </View>
      <TouchableOpacity style = {{ backgroundColor: "#111111", borderRadius: Utils.ScreenWidth(30), flexDirection: 'row'}}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(2)}}>Add a bio to your profile</Text>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(1), width: Utils.ScreenHeight(1), tintColor: '#868686', marginHorizontal: Utils.ScreenWidth(1), marginTop: Utils.ScreenHeight(1)}}/>
      </TouchableOpacity>
  </View>
</View>


<View style={{height: 0.5, backgroundColor: '#868686', marginTop: Utils.ScreenHeight(2)}} />

<View style = {{marginHorizontal: Utils.ScreenWidth(4), }}>
  
  <View style = {{marginTop: Utils.ScreenHeight(4), flexDirection: 'row',  justifyContent: 'space-between'}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(10), borderRadius: Utils.ScreenWidth(30)}}>
        <Text style = {{color: '#FFFFFF'}}>Instagram</Text>
      </View>
      <TouchableOpacity style = {{ backgroundColor: "#111111", borderRadius: Utils.ScreenWidth(30), flexDirection: 'row'}}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(2)}}>Add Instagram to your profile</Text>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(1), width: Utils.ScreenHeight(1), tintColor: '#868686', marginHorizontal: Utils.ScreenWidth(1), marginTop: Utils.ScreenHeight(1)}}/>
      </TouchableOpacity>
  </View>

  <View style = {{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(10), borderRadius: Utils.ScreenWidth(30)}}>
        <Text style = {{color: '#FFFFFF'}}>YouTube</Text>
      </View>
      <TouchableOpacity style = {{ backgroundColor: "#111111", borderRadius: Utils.ScreenWidth(30), flexDirection: 'row'}}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(2)}}>Add youTube to your profile</Text>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5343/5343102.png'}}  
              style = {{height: Utils.ScreenHeight(1), width: Utils.ScreenHeight(1), tintColor: '#868686', marginHorizontal: Utils.ScreenWidth(1), marginTop: Utils.ScreenHeight(1)}}/>
      </TouchableOpacity>
  </View>
</View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile