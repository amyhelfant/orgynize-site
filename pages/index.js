import Head from "next/head";
import Flexbox from "flexbox-react";
import FadeIn from 'react-fade-in';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Home() {
  const [email, setEmail] = React.useState(null);
  const handleSubmit = e => {
    e.preventDefault();
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
          font-size: 3em;
          z-inex: 10;
        }

        .footer {
          font-size: 11px;
          padding: 8px 16px;
          width: calc(100% - 32px);
          padding-bottom: 0px
          margin-top: 12px;
        }

        .logo {
          object-fit: contain;
        }

        button {
          display: inline-block;
          border: none;
          border-radius: 4px;
          padding: 12px;
          margin: 0 0 0 8px;
          text-decoration: none;
          background: #00ff22;
          color: #000;
          cursor: pointer;
          text-align: center;
          text-transform: uppercase;
          transition: background 250ms ease-in-out, transform 150ms ease;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        input {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          margin: 0; /* 2 */
          -webkit-appearance: none;
          -moz-appearance: none;
          padding: 0.5em 1em;
        }

        label {
            font-size: 1.5em;
            margin-right: 20px;
        }
      `}</style>
      <Flexbox
        flexDirection="column"
        maxHeight="90vh"
        justifyContent="center"
        alignItems="center"
        maxWidth="100vw"
      >
        <Flexbox flexGrow={1} marginBottom={12}>
            <Flip top cascade delay={1000}>
          <h1>For party planners that are not freaks in the spreadsheets</h1>
          </Flip>
        </Flexbox>

        <Flexbox flexGrow={1} marginTop={12} marginBottom={12}>
          <Zoom><img className="logo" src="/logo.png" /></Zoom>
        </Flexbox>

        <Flexbox
          flexGrow={1}
          flexDirection="row"
          justifyContent="space-between"
        >
            <Flip top cascade delay={1000}>
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
            <input
              name="email"
              onChange={evt => setEmail(evt.target.value)}
              placeholder="Your email here"
              type="text"
              value={email}
            />
            <button type="submit">Go</button>
          </form>
          </Flip>
        </Flexbox>
        <Flexbox flexGrow={1} width="100%">
        <Flip top cascade delay={1000}>
          <p className="footer">Orgynize by Quxxxn</p>
          </Flip>
        </Flexbox>
      </Flexbox>
    </>
  );
}

export default Home;
