import React from 'react';
import {View, Text, Image, AsyncStorage} from 'react-native';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List(){
    const[techs, setTechs] = useState([]);
    useEffect(() => {
        asyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            
            setTechs(techsArray);
        })
    }, []);

    return(
        <SafeAreaView style={StyleSheet.container}>
            <Image style={StyleSheet.logo} source={logo}/>

            {techs.map(tech => <SpotList key={tech} tech ={tech}/> )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }, 

    logo:{
        height: 32,
        resizeNode: "contain",
        alignSelf: 'center',
        marginTop: 10
    },
})
