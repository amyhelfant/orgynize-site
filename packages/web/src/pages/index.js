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
    const [screenHeight, setScreenHeight] = React.useState(
        Dimensions.get("window").height
    );
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [email, setEmail] = React.useState(null);

    React.useEffect(() => {
        Dimensions.addEventListener("change", newDimensions => {
            const { height, width } = newDimensions.window;
            if (screenWidth > 0 && screenWidth !== width) {
                setScreenWidth(width);
            }

            if (screenHeight > 0 && screenHeight !== height) {
                setScreenHeight(height);
            }
        });
        return Dimensions.removeEventListener("change");
    }, [screenHeight, screenWidth]);

    const handleSubmit = e => {
        if (email == null || email.length <= 0) {
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", email: email })
        })
            .then(() => setShowConfirmation(true))
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
        container: {
            height: screenHeight,
            padding: 20,
            width: screenWidth
        },
        title: {
            fontSize: widthPercentageToDP("7%"),
            color: "white",
            fontFamily: "Over the Rainbow",
            textAlign: "center"
        }
    });

    return (
        <View style={responsiveStyles.container}>
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

            {!showConfirmation ? (
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
                            autoCompleteType="email"
                            blurOnSubmit={true}
                            keyboardAppearance="light"
                            keyboardType="email-address"
                            style={{
                                backgroundColor: "white",
                                borderRadius: 20,
                                height: 40,
                                paddingHorizontal: 16,
                                paddingVertical: 12
                            }}
                            placeholder="Your email here"
                            onChange={({ nativeEvent }) =>
                                setEmail(nativeEvent.text)
                            }
                        />
                    </View>
                    <Touchable onPress={handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.text}>GO</Text>
                        </View>
                    </Touchable>
                </form>
            ) : (
                <View>
                    <Text style={[styles.text, styles.confirmationText]}>
                        🍑🍑🍑 Stay tuned{"..."} 🍑🍑🍑
                    </Text>
                </View>
            )}
            <View style={styles.footer}>
                <Text style={styles.text}>Orgynize by TCAD</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 8,
        justifyContent: "center",
        padding: 12
    },
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
        fontFamily: "Abel",
        padding: 20,
        height: "40px",
        marginVertical: 16
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
    footer: {
        borderTopWidth: 0.25,
        borderTopColor: "white",
        flexDirection: "row",
        marginTop: 48,
        paddingTop: 12
    },
    confirmationText: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center"
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        marginStart: 16,
        marginEnd: 8
    }
});

export default App;
