import {Image, StyleSheet} from 'react-native';
export default function Logo() {
    return(
        <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        margin: 40
    }

});