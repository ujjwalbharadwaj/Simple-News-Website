import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';


export const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
       
      </Head>

      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
         

          <div className={styles.employeeOfTheMonth}>
            <h3>Ujjwal</h3>
            <h6>Web Developer</h6>
           
            <img src="images/uj.jpeg" alt="employee" />
          
          </div>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async pageContext => {
//   const apiResponse = await fetch(
//     'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
//   );
//   const employee = await apiResponse.json();

//   return {
//     props: {
//       employee,
//     },
//   };
// };

export default EOM;
