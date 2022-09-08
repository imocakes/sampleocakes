import Head from 'next/head'

export default function Home() {
  return (
    <div className="mainHeader">
      <Head>
        <title>Resume</title>
        <h1>Angelaine T. Delos Santos</h1>
        <h3>Computer Engineer</h3>
        <p> As a Computer Engineer my ultimate goal is to learn and and widen my knowledge.
           My greatest strength is that I am adaptive and flexible. 
           </p>
      </Head>

      <main>
        <div className="sectionDiv">

   
          <rowColumn1>
            <h3>Personal Information</h3>

            <b>Address</b>
              <p>Villa Sto. Domingo Mexico, Pampanga</p>
              <p><b>Phone</b></p>
              <p>09164572394</p>
              <p><b>Email</b></p>
              <p>angelainedelossantos@gmail.com</p>
          </rowColumn1>
          

           <rowColumn2>
            <h3>Experience</h3>
             <p>2022 - IT Technical Support/Assistant</p>
                <p>Department of Environment and Natural Resources</p>
               <p>Region III, DMGC</p>
               <p>•  Setting up of Desktop Computers and/or Laptops </p>
               <p>•  Reformatting</p>
               <p>•  Setting up Network by crimping UTP cable </p>
               <p>•  Fixing time issues on devices by changing CMOS battery</p>
               <p>•  System Inventory
               </p>
          </rowColumn2>
        </div>

        <div>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .mainHeader {
          width:100%;
          text-align: left;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .sectionDiv {
          display: -webkit-flex;
          display: flex;
          width:100%;
          border: 1px outset black; 
        }

        rowColumn1 {
          width:100%;
          -ms-flex: 4;
          flex: 4;
          text-align: left;


        }

        rowColumn2 {
          width:100%;
          -ms-flex: 6;
          flex: 6;
          text-align: left;
          border: 1px outset black;

        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
