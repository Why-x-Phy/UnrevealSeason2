import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();


  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Welcome to the Unreveal Dashboard</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/node`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/edition.webp" alt="edition" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Unreveal Node</h2>
          <p className={styles.selectBoxDescription}>
          Get a rare <b>Genesis Edition NFT</b> and operate a <b>Unreveal Node</b>{" "}
          and generate <b>Unreveal Token</b> to buy herewith free NFT`s.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/season1`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/gorilla.webp" alt="gorilla" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Season 1</h2>
          <p className={styles.selectBoxDescription}>
          Enter the unique world of <b>Angry Animals Part 1</b>.{" "}
          Mint and Stake your NFT`s to earn <b>Unreveal Tokens</b>.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/season2`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/lion.webp" alt="lion" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Season 2</h2>
          <p className={styles.selectBoxDescription}>
          Enter the unique world of <b>Angry Animals Part 2</b>.{" "}
          Mint and Stake your NFT`s to earn <b>Unreveal Tokens</b>.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/coming.webp" alt="coming" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Season 3</h2>
          <p className={styles.selectBoxDescription}>
          Enter the unique world of <b>Coming Soon</b>.{" "}
          Mint and Stake your NFT`s to earn <b>Unreveal Tokens</b>.
          </p>
        </div>

      </div>
    </div>
    
  );
};

export default Home;