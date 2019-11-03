import React from "react";
import {
    Dimensions,
    Image,
    Text,
    Touchable,
    StyleSheet,
    View
} from "react-primitives";
import { TextInput, PixelRatio } from "react-native-web";
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
    const [screenWidth, setScreenWidth] = React.useState(
        Dimensions.get("window").width
    );
    React.useEffect(() => {
        Dimensions.addEventListener("change", newDimensions => {
            const { width } = newDimensions.window;
            if (screenWidth > 0 && screenWidth !== width) {
                setScreenWidth(newDimensions.window.width);
            }
        });
        return Dimensions.removeEventListener("change");
    }, [screenWidth]);

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => console.log(error));

        e.preventDefault();
    };

    const widthPercentageToDP = widthPercent => {
        // Parse string percentage input and convert it to number.
        const elemWidth =
            typeof widthPercent === "number"
                ? widthPercent
                : parseFloat(widthPercent);

        // Use PixelRatio.roundToNearestPixel method in order to round the layout
        // size (dp) to the nearest one that correspons to an integer number of pixels.
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
    };

    const responsiveStyles = StyleSheet.create({
        title: {
            fontSize: widthPercentageToDP("10%"),
            color: "white",
            fontFamily: "Over the Rainbow",
            textAlign: "center"
        }
    });

    return (
        <View style={styles.container}>
            <Helmet>
                <style>
                    {
                        'body { background-color: #000; font-family: "Abel", serif; }'
                    }
                </style>
                <meta charSet="utf-8" />
                <title>Orgynize</title>
                <link rel="canonical" href="https://orgynize.app" />
            </Helmet>

            <Text adjustsFontSizeToFit={true} style={responsiveStyles.title}>
                For party planners that are not freaks in the spreadsheets.
            </Text>

            <Image style={styles.image} source={logo} resizeMode="contain" />

            <form
                style={{ display: "flex", flexDirection: "row" }}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <Text style={[styles.text, styles.label]}>
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
                <Text style={styles.text}>Orgynize by TCAD</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        flex: 1
    },
    image: {
        flex: 1,
        alignSelf: "stretch",
        width: undefined,
        height: undefined
    },
    input: {
        fontSize: 18,
        padding: 20
    },
    text: {
        color: "white",
        fontFamily: "Abel"
    },
    form: {
        alignContent: "center",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    container: {
        height: "100vh",
        padding: 20,
        width: "100vw"
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: "white",
        flexDirection: "row",
        marginTop: 48,
        paddingTop: 20
    },
    inputContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 16
    }
});

export default App;
