import type { NextPage } from "next";
import Head from "next/head";
import { UploaderView } from "../views";

const Uploader: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NEON</title>
        
      </Head>
      <UploaderView />
    </div>
  );
};

export default Uploader;