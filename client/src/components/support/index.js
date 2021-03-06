import React from 'react';
import styles from './support.module.css';

const Support = () => (
  <main className="container">
    <div className="row mb-5">
      <div className="col py-3 mb-4">
        <h2 className="text-center mt-4">FAQ</h2>
        <details className={styles.details}>
          <summary className={styles.summary}>
            What is this &lsquo;credit&rsquo; and how/where do I get some?
          </summary>
          <p>
            nemp3 credit is the token used to regulate the addition of new
            releases. To be able to add releases, your credit balance needs to
            exceed the number of releases you have on the site. If you sell,
            trade or transfer the credit token, you will not be able to add new
            releases.
          </p>
          <p>
            Your credit is a token on the NEM blockchain, accessed using the NEM
            address/account you use with the site. In order for us to ensure you
            have access to the NEM account you have linked to your profile, we
            require that you verify your NEM address by cryptographically
            &lsquo;signing&rsquo; a message. This is proof that you have full
            control of the account.
          </p>
          <p>
            We are currently working on an automated process to dispense credit,
            while the site is in its testing phase. But in the mean time, please
            drop us a message and we&rsquo;ll be happy to send you one.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            Where can I buy some XEM?
          </summary>
          <p>
            The larger exchanges such as{' '}
            <a href="https://www.binance.com">Binance</a>,{' '}
            <a href="https://bittrex.com/">Bittrex</a> or{' '}
            <a href="https://www.poloniex.com/">Poloniex</a> would be the most
            cost effective, though XEM is usually traded against Bitcoin, so you
            would need to either purchase or trade currency for Bitcoin first,
            then trade it for XEM.
          </p>
          <p>
            If you would rather just quickly buy a small amount of XEM using
            your credit/debit card, you could try a service like Changelly or
            Shapeshift (which I believe you can do inside the main NEM Wallet),
            though this may come at the price of larger fees. In all cases, it
            will be more cost effective exchanging a larger single sum than
            multiple smaller sums.
          </p>
          <p>
            To turn your XEM earnings back into your native currency, you would
            need to use an exhange with the necessary fiat pairing and
            withdrawal ability, e.g. Kraken for USD (via BTC), Bitstamp for EUR
            (via BTC), Zaif for JPY (direct XEM/JPY pair).
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            I&rsquo;ve not used NEM before. Which wallet should I use?
          </summary>
          <p>
            There are two official wallets, an Electron-based desktop client
            called NanoWallet, and an Android/iOS Mobile Wallet. More
            information on both can be found on the{' '}
            <a href="https://www.nem.io/install.html">NEM site</a>.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            What format do you use for downloads?
          </summary>
          <p>
            All audio downloads are high-quality V0 VBR mp3s by default (created
            using the LAME encoding library), with FLAC downloads also available
            from your collection page (in 16 or 24-bit formats, depending on the
            source files uploaded by the artist). More download format options
            will follow.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            What format do you use for streaming?
          </summary>
          <p>
            All source audio is automatically converted to 128kbps aac for
            streaming.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            What if I lose my download?
          </summary>
          <p>
            All successful purchases are stored in your account, accessible in
            your dashboard under the &lsquo;collection&rsquo; tab.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            Why the name &lsquo;nemp3&rsquo;?
          </summary>
          <p>
            The name is a holdover from the initial proof of concept, which
            offered only mp3s. And so a terrible pun was born. It&rsquo;s also a
            nod towards mp3.com, which was one of the earliest popular social
            networking music sites on which I cut my teeth as an artist.
          </p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>
            I&rsquo;ve found a bug! How can I report it?
          </summary>
          <p>
            Excellent! The best way would be to log an issue on{' '}
            <a href="https://github.com/csleary/nemp3v2/issues">Github</a>, to
            keep everything organised with a history of all issues that have
            either been addressed or remain outstanding. But you can also ping
            me on Twitter, or drop a note through the contact form. Thanks!
          </p>
        </details>
      </div>
    </div>
  </main>
);

export default Support;
