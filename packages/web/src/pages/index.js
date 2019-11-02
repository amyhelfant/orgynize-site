import React from "react";
import { Image, Text, Touchable, StyleSheet, View } from "react-primitives";
import { TextInput } from "react-native-web";
import logo from "../images/logo.png";
import { Helmet } from "react-helmet";

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const App = () => {
    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };
    return (
        <View style={styles.container}>
            <Helmet>
                <style>{'body { background-color: #000; }'}</style>
            </Helmet>
            <Image style={styles.image} source={logo} resizeMode="contain" />

            <Text style={styles.title}>
                For party planners that are not freaks in the spreadsheets.
            </Text>
            <form
                style={{flexDirection: 'row'}}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <Text style={[styles.text]}>
                    Want to be notified when we're ready for you to start
                    partying?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        autoFocus={true}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        keyboardAppearance="light"
                        keyboardType="email-address"
                        style={styles.input}
                        placeholder="Your email here"
                    />
                </View>
            </form>
            <View style={styles.footer}>
                <Text style={styles.text}>TCAD</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: "stretch",
        width: undefined,
        height: undefined
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    text: {
        color: "white"
    },
    form: {
        alignContent: "center",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    container: {
        height: "100vh",
        padding: 64,
        width: "100vw"
    },
    title: {
        color: "white",
        fontFamily: "Over the Rainbow",
        fontSize: 64,
        textAlign: "center"
    },
    footer: {
        flexDirection: "row"
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
    }
});

export default App;
