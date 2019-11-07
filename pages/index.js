import Head from "next/head";
import Flexbox from 'flexbox-react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
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
        <meta viewport-fit="cover" />
        <title>Orgynize</title>
        <link rel="canonical" href="https://orgynize.app" />
        <link
          href="https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style global jsx>{`
        html,
        body {
          background: black;
          color: white;
          font-family: "Abel";
          margin: 0;
          padding: 0;
          height: 100vh;
        }
      `}</style>
      <style jsx>{`
        h1 {
          font-family: "Sedgwick Ave Display";
          text-align: center;
        }

        .footer {
          border-top: 0.5px solid white;
          padding: 8px 16px;
          width: calc(100% - 32px);
        }

        .logo {
            object-fit: contain;
        }

        button {
            display: inline-block;
            border: none;
            padding: 1rem 2rem;
            margin: 0;
            text-decoration: none;
            background: #0069ed;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out,
                        transform 150ms ease;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
      `}</style>
      <Flexbox flexDirection="column" maxHeight="90vh" justifyContent="center" alignItems="center" maxWidth="100vw">
        <Flexbox flexGrow={1}>
            <h1>For party planners that are not freaks in the spreadsheets</h1>
        </Flexbox>
        <Flexbox flexGrow={2}>
          <img className="logo" src="/logo.png" />
        </Flexbox>
        <Flexbox flexGrow={1}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Want to be notified when we're ready for you to start partying?
          </label>
          <input name="email" placeholder="Your email here" type="text" />
          <button>Go</button>
        </form>
        </Flexbox>
        <Flexbox flexGrow={1} width="100%">
          <p className="footer">Orgynize by Quxxxn</p>
        </Flexbox>
      </Flexbox>
    </>
  );
}

export default Home;
