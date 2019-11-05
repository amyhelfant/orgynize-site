import Head from 'next/head';

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

function Home() {
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
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Orgynize</title>
            <link rel="canonical" href="https://orgynize.app" />
            <link href="https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap" rel="stylesheet"/>
        </Head>
        <style global jsx>{`
        body {
          background: black;
          color: white;
          font-family: 'Abel';
        }
      `}</style>
          <style jsx>{`
            h1 {
                font-family: 'Sedgwick Ave Display';
            }
      `}</style>
        <h1>For party planners that are not freaks in the spreadsheets</h1>
        <img src="/logo.png"/>
          <form
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
        >
             <input type="hidden" name="form-name" value="contact" />
            <label>Want to be notified when we're ready for you to
                            start partying?</label>
            <input name="email" placeholder="Your email here" type="text"/>
            <button>Go</button>
        </form>
    </>
  );
}

export default Home;