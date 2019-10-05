import React from 'react';
import {View} from 'react-native';
import api from '../services/api';

export default function SpotList({techs}){
    const[spots, setSpots] = useState([]);

    useEffect(() =>{
        async function loadSpots(){
            const response = await api.get('/spots', {
                params: {tech}
            })
            console.log(response.data);
        }

        loadSpots();
    }, []);

    return(
        <View>
            <Text style={StyleSheet.title}>Empresas que usam {tech}</Text>
            <FlatList
                style={StyleSheet.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={style.thumbnail} source={{uri: item.thumbnail_url}}/>
                        <Text style={styles.price} > {item.price? `R$${item.price}/dia`: `GRATUITO`}/</Text>
                        <Text style={styles.company} >{item.company}</Text> 
                        <TouchableOpacity onPress={() => {}} style={styles.button}>
                            <Text style = {styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
    },

    title:{
        fontSize: 20,
        color: #444,
        paddingHorizontal = 20,

    }
});