import Head from "next/head";
import Flexbox from "flexbox-react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Home() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
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
      @keyframes bounceIn{
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
}


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
          animation-name: bounceIn;
  animation-duration: 450ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
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
          <h1>{isDesktopOrLaptop}</h1>
          <h1>For party planners that are not freaks in the spreadsheets</h1>
        </Flexbox>
        <Flexbox flexGrow={1} marginTop={12} marginBottom={12}>
          <img className="logo" src="/logo.png" />
        </Flexbox>
        <Flexbox
          flexGrow={1}
          flexDirection="row"
          justifyContent="space-between"
        >
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
        </Flexbox>
        <Flexbox flexGrow={1} width="100%">
          <p className="footer">Orgynize by Quxxxn</p>
        </Flexbox>
      </Flexbox>
    </>
  );
}

export default Home;
