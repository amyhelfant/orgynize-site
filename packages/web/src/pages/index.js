import React from "react";
import { Text, Touchable, StyleSheet, View } from "react-primitives";
import { TextInput } from "react-native-web";

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
            <Text style={styles.title}>
                For party planners that are not freaks in the spreadsheets.
            </Text>
            <form
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
                <TextInput placeholder="Your email here" />
            </form>
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: "#000",
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
    footer: {}
});

export default App;
