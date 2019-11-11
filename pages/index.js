import Head from "next/head";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import { NextSeo } from "next-seo";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Home() {
  const [email, setEmail] = React.useState(null);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
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
      <NextSeo
        title="Orgynize (by Quxxxn)"
        description="For party planners that are not freaks in the spreadsheets."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.orgynize.app/",
          site_name: "Orgynize (by Quxxxn)",
          images: [
            {
              url:
                "https://github.com/davitykale/orgynize-site/blob/master/public/logo.png?raw=true",
              width: 800,
              height: 600,
              alt: "Orgynize (by Quxxxn)"
            }
          ]
        }}
      />
      <style global jsx>{`
        html,
        body {
          background-color: black;
          color: white;
          font-family: "Abel";
          margin: 0;
          padding: 0;
          position: relative;

          background-image: url("/logo.png");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          background-size: auto 65%;
          background-origin: content-box;
        }

        @media only screen and (max-width: 600px) {
          body {
            background-size: auto 50%;
          }
        }
      `}</style>
      <style jsx>{`
        p.header {
          box-sizing: border-box;
          text-align: center;
          font-size: 3.2em;
          z-inex: 10;
          box-sizing:border-box;
          padding: 12px 20px;
        }

        .div1 {
            height: 30%;
        }

        .div2 {
            height: 40%;
        }

        .div3 {
            height: 20%;
        }

        .div4 {
            height: 10%;
        }

        .footer {
          font-size: 11px;
          padding: 8px 16px;
          width: calc(100% - 32px);
          padding-bottom: 0px
          margin-top: 12px;
          position: fixed;
          bottom: 8px;
          left: 8px;
        }

        .logo {
          object-fit: contain;
        }

        form,
        .foo {
            margin-bottom: 40px;
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

        .container {
            align-items: center;
            box-sizing: border-box;
            height: 90vh;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        @media only screen and (max-width: 600px) {
            p.header {
                box-sizing: border-box;
                font-size: 2em;
                word-wrap: normal !important;
                padding: 0 16px;
                word-break: normal !important;
            }

            .logo {
                max-height: 350px;
            }

            form {
                display: flex;
                margin-bottom: 100px;
                padding: 0;
                box-sizing:border-box;
            }

            .footer {
                bottom: 2px;
                left: 0px;
            }

            label {
                font-size: 1em;
                display: block;
            }
        }
      `}</style>
      <div className="container">
        <Flip top cascade delay={1000}>
          <p className="header">
            For party planners that are not freaks in the <span></span>
            spreadsheets
          </p>
        </Flip>

        <div>
          <Flip top cascade delay={1000}>
            {!showConfirmation ? (
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <label>
                  Want to be notified when we're ready for you to start
                  partying?
                </label>
                <input
                  name="email"
                  onChange={evt => setEmail(evt.target.value)}
                  placeholder="hotness@sexy.com"
                  type="text"
                  value={email}
                />
                <button type="submit">Go</button>
              </form>
            ) : (
              <label className="foo">Stay tuned{"..."}</label>
            )}
          </Flip>
          <Flip top cascade delay={1000}>
            <p className="footer">Orgynize by Quxxxn</p>
          </Flip>
        </div>
      </div>
    </>
  );
}

export default Home;
