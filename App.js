/* eslint-disable prettier/prettier */
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';

const LotsOfStyles = () => {
    return (

        <View style={styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
                hidden={false}
            />
            <Image
                style={{ height: '50%', width: '100%' }}
                source={require('./assets/img.jpeg')}
            />
            <ScrollView>
                <Text style={styles.main}>Login</Text>
                <TextInput style={styles.in1} placeholder="Username" />
                <TextInput style={styles.in1} placeholder="Password" secureTextEntry />
                <View style={styles.btnv}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.logint}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.bbtn}>
                        <TouchableOpacity>
                            <Text style={styles.sup}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.sup}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.supot}>
                        <Text style={styles.sup}>Login Or SignUp with</Text>
                    </View>
                    <View style={styles.iconv}>
                        <Image style={styles.icons} source={require('./assets/google.png')} />
                        <Image style={styles.icons1} source={require('./assets/fb.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'openb',
        backgroundColor: '#fff',
    },
    in1: {
        width: '90%',
        padding: 10,
        borderColor: '#D1D1D1',
        borderWidth: 2,
        borderRadius: 5,
        margin: 12,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
    },
    main: {
        marginLeft: 20,
        marginBottom: 0,
        color: 'black',
        fontSize: 33,
        fontWeight: 'bold',
        fontFamily: 'openb.ttf',
    },
    button: {
        backgroundColor: '#FE5B5A',
        padding: 12,
        width: '90%',
        borderRadius: 5,
        margin: 12,
        marginLeft: 20,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    sup: {
        marginLeft: 20,
        marginTop: 5,
        marginRight: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7a7a7a',
    },
    bbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: 130,
    },
    btnt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4d4c4a',
    },
    logint: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#292c30',
    },
    supot: {
        marginTop: 7,
        alignItems: 'center',
    },
    icons: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginRight: 10,
    },
    icons1: {
        marginTop: 18,
        width: 33,
        height: 33,
        marginLeft: 10,
    },
});

export default LotsOfStyles;
